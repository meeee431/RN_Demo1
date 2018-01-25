import React from 'react';
import { View, Text, Button } from 'react-native';
import { StackNavigator, TabNavigator } from 'react-navigation'; // 1.0.0-beta.14
import Ionicons from 'react-native-vector-icons/Ionicons'; // 4.4.2
import {Colors} from './resource'
import Home from './pages/home/Home';
import test from './pages/home/test';

const HomeScreen = ({ navigation }) => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text>Home Screen</Text>
    <Button
      onPress={() => navigation.navigate('Profile')}
      title="Go to details"
    />
  </View>
);

const DetailsScreen = () => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text>Details Screen</Text>
  </View>
);
// 注册tabs
const Index = TabNavigator({
  Home: {
    screen: Home,
    navigationOptions: {  // 也可以写在组件的static  
      tabBarLabel: '首页',
      tabBarIcon: ({ tintColor, focused }) => (
        <Ionicons
          name={focused ? 'ios-home' : 'ios-home-outline'}
          size={26}
          style={{ color: tintColor }}
        />
      ),
    }
  },
  Message: {
    screen: HomeScreen,
    navigationOptions: {  // 也可以写在组件的static  
      tabBarLabel: '消息',
      tabBarIcon: ({ tintColor, focused }) => (
        <Ionicons
          name={focused ? 'ios-text' : 'ios-text-outline'}
          size={26}
          style={{ color: tintColor }}
        />
      ),
    }
  },
  Profile: {
    screen: DetailsScreen,
    navigationOptions: {
      tabBarLabel: '我的',
      tabBarIcon: ({ tintColor, focused }) => (
        <Ionicons
          name={focused ? 'ios-person' : 'ios-person-outline'}
          size={26}
          style={{ color: tintColor }}
        />
      ),
    },
  },
}, {
    animationEnabled: false, // 切换页面时是否有动画效果
    tabBarPosition: 'bottom', // 显示在底端，android 默认是显示在页面顶端的
    swipeEnabled: true, // 是否可以左右滑动切换tab
    backBehavior: 'none', // 按 back 键是否跳转到第一个Tab(首页)， none 为不跳转
    tabBarOptions: {
      activeTintColor: '#4BC1D2', // 文字和图片选中颜色
      inactiveTintColor: Colors.font, // 文字和图片未选中颜色
      showIcon: true, // android 默认不显示 icon, 需要设置为 true 才会显示
      showLabel: true,
      upperCaseLabel: false,
      // pressColor: '#823453',
      // pressOpacity: 0.8,
      indicatorStyle: {
        height: 0  // 如TabBar下面显示有一条线，可以设高度为0后隐藏
      },
      style: {
        backgroundColor: '#fff', // TabBar 背景色
        // borderTopWidth: 0.5,
        // borderTopColor: '#ccc',//底部导航在导航最上方添加一条分割线，设置：tabBarOptions => style => borderTopWidth: 0.5, borderTopColor: '#ccc'；
        paddingBottom: 0,
      },
      labelStyle: {

        fontSize: 12, // 文字大小 
        margin: 1//导航安卓图标和文字间隙比较大，手动调整小设置：tabBarOptions => labelStyle => margin: 0；
      },

    },

  });


export default Index;