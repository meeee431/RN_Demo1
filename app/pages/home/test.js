import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Menu, {
  MenuProvider,
  MenuTrigger,
  MenuOptions,
  MenuOption,
  renderers
} from 'react-native-popup-menu';

import { Styles, optionsStyles } from "./styles/HomeStyle";
import { CommonStyles, Images } from "../../resource";
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Carousel } from 'antd-mobile';
import { SearchBar, Header, Icon } from 'react-native-elements';
import { Colors } from '../../resource'

let unique = 0;
const {Popover, SlideInMenu } = renderers;

export default class test extends Component {

  constructor(props, ctx) {
    super(props, ctx);
    this.state = { log: [] };
  }

  selectNumber(value) {
    this.addLog(`selecting number: ${value}`);
  }

  selectOptionType(value) {
    const v = typeof value === 'object' ? JSON.stringify(value) : value;
    this.addLog(`selecting type: ${v}`);
    return value !== 'Do not close';
  }

  addLog(value) {
    this.setState({
      log: [...this.state.log, {
        value,
        id: ++unique
      }]
    });
  }

  toggleHighlight(id) {
    const log = this.state.log.map(l => {
      if (l.id === id) {
        return Object.assign({}, l, {highlighted: !l.highlighted});
      }
      return l;
    })
    this.setState({ log });
  }

  deleteLogItem(id) {
    const log = this.state.log.filter(l => l.id !== id);
    this.setState({ log });
  }
    // 得到焦点事件
    onsearchFocus = () => {
      this.props.navigation.navigate("Search");
      console.log('onsearchFocus');
  }
  render() {
    return (
      <MenuProvider style={{flex: 1}}>
    
          <View style={CommonStyles.statusBar}></View>
          <View  style={{ flexDirection: "row", backgroundColor: "red" }}>
                <SearchBar
                lightTheme
                ref={search => this.search = search}
                placeholder='搜索...'
                icon={{ type: 'font-awesome', name: 'search', style: { top: 15 } }}
                inputStyle={Styles.SearchButton_left}//输入框样式
                containerStyle={Styles.SearchButtonContain_left}//整体框的样式
                onFocus={this.onsearchFocus}

            />
            
            <Menu name="types" onSelect={value => this.selectOptionType(value)}
              onBackdropPress={() => this.addLog('menu will be closed by backdrop')}
              onOpen={() => this.addLog('menu is opening')}
              onClose={() => this.addLog('menu is closing')}
              renderer={Popover}
              >
              <MenuTrigger style={styles.trigger}>
                      <Icon name="plus"
                                    type="evilicon"
                                    color={Colors.font}
                                    size={28}
                                  
                                />
              </MenuTrigger>
              <MenuOptions customStyles={{ optionText: styles.text }}>
                <MenuOption value="Normal" text='Normal' />
                <MenuOption value="N/A" disabled={true} text='Disabled' />
                <MenuOption value="N/A" disableTouchable={true} text='Non-selectable' />
                <MenuOption value="Do not close" text='Do not close' />
                <View style={styles.divider}/>
                <MenuOption value={{ text: 'Hello world!' }} text='Object as value' />
              </MenuOptions>
            </Menu>
          </View>

          <ScrollView style={styles.logView}>
            {this.state.log.map((l, i) => {
              const wrapperStyle = {backgroundColor: i % 2 ? 'white' : 'whitesmoke'};
              const textStyle = {color: l.highlighted ? 'red' : 'gray'};
              return (
                <View style={[styles.logItem, wrapperStyle]} key={l.id}>
                  <Text style={[styles.text, textStyle]}>{l.value}</Text>
                  <View style={{flex:1}}></View>
                  <Menu>
                    <MenuTrigger text='edit' customStyles={{ triggerText: styles.text }} />
                    <MenuOptions customStyles={{ optionText: styles.text }}>
                      <MenuOption onSelect={() => this.toggleHighlight(l.id)} text={l.highlighted ? 'Unhighlight' : 'Highlight'} />
                      <MenuOption onSelect={() => this.deleteLogItem(l.id)} text='Delete' />
                    </MenuOptions>
                  </Menu>
                </View>
              );
            })}
          </ScrollView>

      
      </MenuProvider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'white',
  },
  topbar: {
    flexDirection: 'row',
    backgroundColor: 'red',
    paddingTop : 15,
  },
  trigger: {
    padding: 5,
    margin: 5,
  },
  triggerText: {
    color: 'white',
  },
  disabled: {
    color: '#ccc',
  },
  divider: {
    marginVertical: 5,
    marginHorizontal: 2,
    borderBottomWidth: 1,
    borderColor: '#ccc'
  },
  logView: {
    flex: 1,
    flexDirection: 'column',
  },
  logItem: {
    flexDirection: 'row',
    padding: 8,
  },
  slideInOption: {
    padding: 5,
  },
  text: {
    fontSize: 18,
  }
});