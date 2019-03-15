import React, { Component } from 'react';

import { Provider } from "react-redux";
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

const RootStack = createStackNavigator({}, {});