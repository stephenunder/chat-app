import React, { Component } from 'react';

import Chat from "./components/Chat";
import Login from "./components/Login";
import { Provider } from "react-redux";
import Users from "./components/Users";
import { createStackNavigator } from "react-navigation";
import store from "./store";

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <RootStack />
      </Provider>
    );
  }
}

const RootStack = createStackNavigator({
  Login: {
    screen: Login
  },
  Users: {
    screen: Users
  },
  Chat: {
    screen: Chat
  }
}, {
  initialRouteName: "Login",
  navigationOptions: {
    headerTitle: "Chat!"
  }
});