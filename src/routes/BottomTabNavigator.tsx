import React from 'react';
import Home from '../pages/Home'
import Favorites from '../pages/Favoritos';
import BemVindo from '../pages/Favoritos';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Ionicons  } from '@expo/vector-icons'

const Tab = createBottomTabNavigator<RootTabParamList>();


export type RootTabParamList = {
	Home: undefined;
	Shop: undefined;
	Carrinho: undefined;
}

export const BottomTabNavigator = () => {
  
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={{
                    headerShown: false,
                    tabBarShowLabel: false,
                    tabBarActiveTintColor: "#fff",
                    tabBarInactiveTintColor: "#aaa",
                    tabBarStyle: {
                        position: "absolute",
                        borderTopWidth: 0,
                        backgroundColor: "#062451",
                        paddingBottom: 2
                    }
                }}>
                <Tab.Screen 
                    options={{
                        headerShown: false
                    }} 
                    name='Home'
                    component={Home} 
                />
                
            </Tab.Navigator>
        </NavigationContainer>
    );
}