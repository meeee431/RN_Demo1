import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import { Colors } from '../resource';
export default class BackButton extends Component {
    static defaultProps = {
        // 回调函数
        popToHome: null
    };

    render() {
        return (
            <TouchableOpacity style={{backgroundColor:'white'}} onPress={this.props.popToHome}>
                <Icon
                    name="ios-arrow-back-outline"    
                    size={30}   //图片大小
                    color={Colors.font}  //图片颜色
                    style={{marginLeft:10,marginTop:7,height:30}}
                />
            </TouchableOpacity>
        );
    }
}