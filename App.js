import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import HomeScreen from "./screens/Home";
import IssLocationScreen from "./screens/IssLocation";
import MeteorScreen from "./screens/Meteors";
import { NativigationContainer } from '@react-navigation/native';
import {createStackNavigator} from "@react-navigation/stack";
const Stack=createStackNavigator()

export default function App() {
  return (
   <NativigationContainer>
     <Stack.Navigator initialRouteName='Home' screenOptions={{headerShown:true}}>
       <Stack.Screen name="Home" component={HomeScreen}/>
       <Stack.Screen name="ISSLocation" component={IssLocationScreen}/>
       <Stack.Screen name="Meteor" component={MeteorScreen}/>
     </Stack.Navigator>
   </NativigationContainer>
  );
}

