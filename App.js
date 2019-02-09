import React from 'react';
import { StyleSheet, Text, View, Component } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation'

import HomeScreen from './Screens/HomeScreen'
import LoginScreen from './Screens/LoginScreen'
import MapScreen from './Screens/MapScreen'
import SignupScreen from './Screens/SignupScreen'
import * as firebase from 'firebase'
import Firebase from './lib/Firebase'

export default class App extends React.Component {
  constructor(props){
    super(props)

    if(!firebase.apps.length){ firebase.initializeApp(Firebase.FirebaseConfig);}
  }
  render() {
    return (
      <AppH/>
    );
  }
}

const RootStack = createStackNavigator({
  HomeScreen: HomeScreen,
  LoginScreen: LoginScreen,
  MapScreen: MapScreen,
  SignupScreen: SignupScreen
},
{
  headerMode: 'none',
  navigationOptions: {
    headerLeft: null
  }
}
);


const AppH = createAppContainer(RootStack);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
