import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import BottomTabNavigator from './navigator/TabNavigator';
import { NavigationContainer } from '@react-navigation/native';
import * as firebase from 'firebase';
import { firebaseConfig } from './config';
import LoginScreen from './screens/LoginScreen';
import LoadingScreen from './screens/LoadingScreen';
import { createSwitchNavigator, createAppContainer } from 'react-navigation';

if(!firebase.apps.length){

  firebase.initializeApp(firebaseConfig)

}

else{

  firebase.app()

}

const AppSwitchNavigator = createSwitchNavigator({

  Loading: {

    screen: LoadingScreen

  },

  Login:{

    screen: LoginScreen

  },

  Tab:{

    screen: BottomTabNavigator

  }

},

{

initialRouteName: 'Loading'

}

)

const AppContainer = createAppContainer(AppSwitchNavigator)

export default function App() {
  return (

       <NavigationContainer>

          <AppContainer/>

       </NavigationContainer> 

  )
}

 
 
