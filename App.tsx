// import 'react-native-auth0';
/* eslint-disable prettier/prettier */
import * as React from 'react';
import {NavigationContainer } from '@react-navigation/native';
import SearchScreen from './SearchScreen';

import ResultShowScreen from './ResultShowScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ErrorScreen from './ErrorScreen';


const Stack=createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Bussiness Search" component={SearchScreen}/>
        <Stack.Screen name="Results" component={ResultShowScreen}/>
        <Stack.Screen name="Error" component={ErrorScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

