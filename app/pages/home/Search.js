/**
 * Created by kid on 2017/8/10
 * Function:主页视图
 * Desc:
 */
import React, { Component } from "react";
import { View, Text, Image} from "react-native";
import { Styles } from "./styles/HomeStyle";
import { SearchBar,Icon, Button  } from 'react-native-elements';
import NavLeft from '../../components/BackButton';
import Head from './Head';
import { CommonStyles, Images,Colors } from "../../resource";
export default class Search extends Component {

    static navigationOptions = ({ navigation }) => ({

        title: `Chat with 111`,
       
        headerStyle: {
            backgroundColor: '#fff',
            //高 度
            height:50,
        },
        //导航栏的title的style
        headerTitleStyle: {
            color: 'green',
            //居中显示
            alignSelf: 'center',

        },
        //headerLeft: (),
        header:(
            <View>
                <View style={CommonStyles.statusBar}></View>
                <View style={{flexDirection:'row',backgroundColor:'white'}}>
                    <NavLeft popToHome={() => navigation.state.params.navigatePress()} />
                    <SearchBar
                        lightTheme
                        ref={search => this.search = search}
                        placeholder='搜索...'
                        icon={{ type: 'font-awesome', name: 'search', style: { top: 15 } }}
                        inputStyle={Styles.SearchButton_left}//输入框样式
                        containerStyle={Styles.SearchButtonContain_left}//整体框的样式
                        //onFocus={this.onsearchFocus}
                    />

                    <Button raised title='搜索' color={Colors.font} 
                        containerViewStyle={{backgroundColor: 'white',borderWidth: 0, }}
                        buttonStyle={{backgroundColor: 'white',borderWidth: 0, width: null, height: 40 }}
                        textStyle={{textAlign: 'center'}}
                         
                        
                    />
           
                </View>
            </View>
        ),
        //按压返回按钮显示的颜色 API > 5.0 有效
        headerPressColorAndroid: 'blue',
        //返回按钮的颜色
        headerTintColor: 'red',
        //是否允许右滑返回，在iOS上默认为true，在Android上默认为false
        gesturesEnabled: true,
       
    });
    constructor(props) {
        super(props);

    }
    //reder后执行
    componentDidMount() {

        this.props.navigation.setParams({ navigatePress: this.popToHome })
    }
    //返回首页
    popToHome = () => {
        console.log('返回');
        
        this.props.navigation.goBack();
 
    }
    render() {
        return (

            <View style={[Styles.view_container, { backgroundColor: 'red', flex: 1 }]}>


            </View>

        );
    }
}

