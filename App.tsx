import React from 'react';

import { StatusBar } from 'expo-status-bar';
import { BottomTabNavigator } from './src/routes/BottomTabNavigator'
import AboutUs from './src/pages/AboutUs';
import Login from './src/pages/Login';


export default function App() {
  return (
    // <>
    //   <StatusBar
    //     backgroundColor='#fff'
    //     translucent={false}
    //   />
    //   <BottomTabNavigator/>
    <AboutUs/>
  );
}