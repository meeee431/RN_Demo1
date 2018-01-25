/**
 * Created by kid on 2017/8/10
 * Function:主页视图
 * Desc:
 */
import React, { Component } from "react";
import { View, Text, Image } from "react-native";
import {Styles} from "./styles/HomeStyle";
import Head from './Head';
export default class Home extends Component {
    render() {
        return (

            <View style={Styles.view_container}>
                <Head></Head>

            </View>

        );
    }
}

