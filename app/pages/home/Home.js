/**
 * Created by kid on 2017/8/10
 * Function:主页视图
 * Desc:
 */
import React, { Component } from "react";
import { View, Text, Image,Button } from "react-native";
import {Styles} from "./styles/HomeStyle";
import Head from './Head';
export default class Home extends Component {
    constructor(props) {
        super(props);
 
    }
     
    static navigationOptions = ({ navigation }) => ({
       
        header:null,
        

    } );
    
    render() {
 
        return (

            <View style={Styles.view_container}>
                <Head navigation={this.props.navigation}></Head>
 
            </View>

        );
    }
}

