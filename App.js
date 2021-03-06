import React from 'react';
import {
  AppRegistry,
  Text,
  Button,
  View,
} from 'react-native';

import { StackNavigator } from 'react-navigation';
import { TabNavigator } from "react-navigation";

import Index from './app/index';
import Search from './app/pages/home/Search';
import test from './app/pages/home/test';
export default class App extends React.Component {
  render() {
    return (
      <Start />
    )
  }
}

const Start = StackNavigator(
  {
    Main: {
      screen: Index
    },
    Search: {
      screen: Search
    },

  }, {
    //headerMode: 'none',
  },
);

/**
 * Created by YiBing on 2017/5/4.
 */


class ChatScreen extends React.Component {
  // Nav options can be defined as a function of the screen's props:
  static navigationOptions = ({ navigation }) => ({
    title: `Chat with ${navigation.state.params.user}`,
  });
  render() {
    // The screen's current route is passed in to `props.navigation.state`:
    const { params } = this.props.navigation.state;
    return (
      <View>
        <Text>Chat with {params.user}</Text>
      </View>
    );
  }
}

class RecentChatsScreen extends React.Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <Text>List of recent chats</Text>
        <Button
          onPress={() => navigate('Chat', { user: 'Lucy' })} //Passing params
          title="Chat with Lucy"
        />
      </View>
    );
  }
}

class AllContactsScreen extends React.Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <Text>List of all contacts</Text>
        <Button
          onPress={() => navigate('Chat', { user: 'Jane' })} //Passing params
          title="Chat with Jane1"
        />
      </View>
    );
  }
}

const MainScreenNavigator = TabNavigator({
  Recent: { screen: RecentChatsScreen },
  All: { screen: AllContactsScreen },
});

MainScreenNavigator.navigationOptions = {
  title: 'My Chats',
};

const SimpleAppReactNavigation = StackNavigator({
  Home: { screen: MainScreenNavigator },
  Chat: { screen: ChatScreen },
});

