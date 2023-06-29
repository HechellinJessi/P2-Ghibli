import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import BemVindo from '../pages/BemVindo';
import Informacao from '../pages/Informacao';
import Login from '../pages/Login';
import { BottomTabNavigator } from './BottomTabNavigator';
import SplashScreen from '../pages/Login/Splash';

const Stack = createNativeStackNavigator<RootStackParamList>();

export type RootStackParamList = {
    BemVindo: undefined,
    Informacao: undefined
    Home: undefined;
    Login: undefined;
    Splash: undefined;
}

export default function StackNavigator() {
    return (
        <Stack.Navigator
            initialRouteName='BemVindo'
            screenOptions={{
                headerShown: false
            }}>
            <Stack.Screen name='BemVindo' component={BemVindo} />
            <Stack.Screen name='Informacao' component={Informacao} />
            <Stack.Screen name='Splash' component={SplashScreen}/>
            <Stack.Screen name='Login' component={Login} />
            <Stack.Screen name='Home' component={BottomTabNavigator} />
        </Stack.Navigator>
    );
}