import React, { Component } from 'react';
import {View,Text,StyleSheet } from 'react-native';
import {
    Menu,
    MenuProvider,
    MenuOptions,
    MenuTrigger,
    renderers,
    MenuOption,
} from 'react-native-popup-menu';

import { Icon } from 'react-native-elements';
import {Colors} from '../resource'
const { Popover } = renderers

export default class PopoverItem extends Component {
    render() {
        return (
            <MenuOption onSelect={this.props.onSelect} >
                <View style={styles.container} >
                    <View style={styles.left}>
                        <Icon name={this.props.IconName}
                            type="font-awesome"
                            color="white"
                            size={24}

                        />
                    </View>
                    <View style={styles.right}>
                        <Text style={styles.right_text}>{this.props.Text}</Text>
                    </View>
                </View>
            </MenuOption>
             
        )
    }
}


const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      margin: 5,

 
    },
    left: {
        alignItems: 'flex-end', 
        paddingRight: 10 
  
    },
 
    right: {
        alignItems: 'flex-start', 
        paddingRight: 10 
    }, 
    right_text:{
        color: 'white', 
        fontSize: 16 
    }
  
  })
  