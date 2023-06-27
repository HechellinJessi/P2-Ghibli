import React from 'react';

import { StatusBar } from 'expo-status-bar';
import { BottomTabNavigator } from './src/routes/BottomTabNavigator'


export default function App() {
  return (
    <>
      <StatusBar
        backgroundColor='#fff'
        translucent={false}
      />
      <BottomTabNavigator/>
    </>
  );
}