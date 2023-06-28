import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import BemVindo from '../pages/BemVindo';
import Home from '../pages/Home';
import Informacao from '../pages/Informacao';
import { BottomTabNavigator } from './BottomTabNavigator'; 

const Stack = createNativeStackNavigator<RootStackParamList>();

export type RootStackParamList = {
    BemVindo: undefined,
    Informacao: undefined
    Home: undefined;
    BottomTab: {
        screen: "Home" | "Favorites";
    }
}
// const { Navigator, Screen } = createNativeStackNavigator<propsNavigationStack>()

 export default function StackNavigator() {
    return (
        <Stack.Navigator
            initialRouteName='BemVindo'
            screenOptions={{
                headerShown: false
            }}>
            <Stack.Screen name='BemVindo' component={BemVindo} />
            <Stack.Screen name='Informacao' component={Informacao} />
            <Stack.Screen name='Home' component={BottomTabNavigator} />
            {/* <Stack.Screen name='Test' component={ThemeScreen} /> */}
        </Stack.Navigator>
    );
}