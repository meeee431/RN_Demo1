/**
 * Created by kid on 2017/8/10
 * Function:主页视图
 * Desc:
 */
import React, { Component } from "react";
import { View, Text, Image,Button } from "react-native";
import {Styles} from "./styles/HomeStyle";
export default class Search extends Component {
 
    static navigationOptions = ({ navigation }) => ({
       
        title: `Chat with 111`,
 
    } );
    
    render() {
        return (

            <View style={[Styles.view_container,{backgroundColor:'red',flex:1}]}>
                 
                
            </View>

        );
    }
}

