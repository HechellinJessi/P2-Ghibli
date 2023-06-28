import React from 'react';

import { StatusBar } from 'expo-status-bar';
import { BottomTabNavigator } from './src/routes/BottomTabNavigator'
import AboutUs from './src/pages/AboutUs';
import Login from './src/pages/Login';
import BemVindo from './src/pages/BemVindo';


export default function App() {
  return (
    <>
      {/* <StatusBar
        backgroundColor='#fff'
        translucent={false}
      />
      <BottomTabNavigator/> */}

       <Login/> 
    </>
  );
}