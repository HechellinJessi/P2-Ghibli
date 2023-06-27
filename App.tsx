import React from 'react';

import BemVindo from './src/pages/BemVindo'
import Home from './src/pages/Home';
import Diretores from './src/pages/Diretores'
import Favorites from './src/pages/Favoritos';
import { StatusBar } from 'expo-status-bar';
import { BottomTabNavigator } from './src/routes/BottomTabNavigator'


export default function App() {
  return (
    <>
      <Home/>
    </>
  );
}

