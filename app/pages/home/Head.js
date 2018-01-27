/**
 * Created by kid on 2018/1/18
 * Function:主页视图_头部
 * Desc:
 */
import React, { Component } from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { Styles, optionsStyles } from "./styles/HomeStyle";
import { CommonStyles, Images } from "../../resource";
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Carousel } from 'antd-mobile';
import { SearchBar, Header, Icon } from 'react-native-elements';
import { Colors } from '../../resource'
import PopoverItem from '../../components/PopoverItem'

import {
    Menu,
    MenuProvider,
    MenuOptions,
    MenuTrigger,
    renderers,
    MenuOption,
} from 'react-native-popup-menu';

const { Popover, SlideInMenu } = renderers
export default class Head extends Component {
    
    constructor(props) {
        super(props);
 
    }
    onselectedIndexChange = (index) => console.log('change to', index)
    // 得到焦点事件
    onsearchFocus = () => {
        const { navigate } = this.props.navigation;
        navigate('Search', { user: 'Jane' });
 
        console.log('onsearchFocus');
    }

    //加号点击事件
    onPlusPress = () => {
        console.log('111');
    }
    render() {

        return (
            <MenuProvider style={{ flex: 1 }}>

                <View style={CommonStyles.statusBar}></View>
                <View style={{ flexDirection: "row", backgroundColor: "white" }}>

                    <SearchBar
                        lightTheme
                        ref={search => this.search = search}
                        placeholder='搜索...'
                        icon={{ type: 'font-awesome', name: 'search', style: { top: 15 } }}
                        inputStyle={Styles.SearchButton_left}//输入框样式
                        containerStyle={Styles.SearchButtonContain_left}//整体框的样式
                        onFocus={this.onsearchFocus}

                    />



                    <Menu  renderer={Popover} rendererProps={{ anchorStyle: { backgroundColor: "#606367" } }}  >
                        <MenuTrigger  style={{    padding: 5,margin:5}} >
                            <Icon name="plus"
                                type="evilicon"
                                color={Colors.font}
                                size={28}
                               
                            />

                        </MenuTrigger>
                        <MenuOptions customStyles={optionsStyles}>
                            <PopoverItem Text="test1"  IconName="crosshairs"/>
                            <View style={ styles.divider}/>
                            <PopoverItem Text="test21"  IconName="qrcode"/>
                            <View style={styles.divider}/>
                             <PopoverItem Text="tes3"  IconName="file-text-o"/>
                        </MenuOptions>
                    </Menu>


                </View>


                <Carousel

                    autoplayTimeout={5}
                    autoplay
                    infinite
                    afterChange={this.onselectedIndexChange}//切换面板的回调
                >
                    <View style={Styles.Carousel}>
                        <Image source={Images.home_Banner} />
                    </View>

                </Carousel>


            </MenuProvider>
        );
    }
}

const styles = StyleSheet.create({
 
    divider: {
        marginVertical:5,
        marginHorizontal: 2,
        borderBottomWidth: 1,
        borderColor: Colors.font
    },
    
  });