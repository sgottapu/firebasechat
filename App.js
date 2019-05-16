/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import React, { Component } from 'react';  
import { createStackNavigator, createAppContainer } from 'react-navigation';  
// we will use these two screens later in our AppNavigator
import {Home,
  AddItem,
  List

} from './src/screens';

const AppNavigator = createStackNavigator(  
  {
    Home,
    AddItem,
    List
  },
  {
    initialRouteName: 'Home'
  }
);

const AppContainer = createAppContainer(AppNavigator);

export default class App extends Component {  
  render() {
    return <AppContainer />;
  }
}