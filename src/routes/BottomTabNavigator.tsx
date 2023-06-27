import React from 'react';
import Home from '../pages/Home'
import Favorites from '../pages/Favoritos';
import BemVindo from '../pages/BemVindo';

import Informacao from '../pages/Informacao';

import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ThemeContextProvider, useTheme } from '../Context/ThemeContext';

import { MaterialIcons, Ionicons } from '@expo/vector-icons';

import { View } from 'react-native';
import { Button, Headline } from 'react-native-paper';

const Tab = createBottomTabNavigator<RootTabParamList>();
const Stack = createNativeStackNavigator();

const ThemeScreen = () => {
    const { toggleThemeType, themeType, isDarkTheme, theme } = useTheme();

    return (
        <View>
            <Button mode='contained' onPress={toggleThemeType}>
                Theme
            </Button>
        </View>
    )
}

export type RootStackParamList = {
    BemVindo: undefined,
    Informacao: undefined

}

export type RootTabParamList = {
    Home: undefined;
    Favorites: undefined;
    BemVindo: undefined;

}

function StackNavigator() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false  }}>
            <Stack.Screen name='Test' component={ThemeScreen} />
            <Stack.Screen name='BemVindo' component={BemVindo} />
            <Stack.Screen name='Informacao' component={Informacao} />
        </Stack.Navigator>
    )
}

export const BottomTabNavigator = () => {

    return (

        <ThemeContextProvider>
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
                        paddingBottom: 2,
                        borderTopLeftRadius: 30,
                        borderTopRightRadius: 30
                    }
                }}>
                <Tab.Screen
                    options={{
                        headerShown: false,
                        tabBarIcon: ({ color, size, focused }) => {
                            if (focused) {
                                return <Ionicons name="home" size={30} color={color} />
                            }

                            return <Ionicons name="home-outline" size={size} color={color} />
                        }
                    }}
                    name='Home'
                    component={Home}
                />
                <Tab.Screen
                    options={{
                        headerShown: false,
                        tabBarIcon: ({ color, size, focused }) => {
                            if (focused) {
                                return <Ionicons name="game-controller" size={32} color={color} />
                            }

                            return <Ionicons name="game-controller-outline" size={size} color={color} />
                        }
                    }}
                    name='BemVindo'

                    component={StackNavigator}

                    // component={BemVindo} 

                />
                <Tab.Screen
                    options={{
                        headerShown: false,
                        tabBarIcon: ({ color, size, focused }) => {
                            if (focused) {
                                return <MaterialIcons name="favorite" size={30} color={color} />
                            }
                            return <MaterialIcons name="favorite-outline" size={size} color={color} />
                        }
                    }}
                    name='Favorites'
                    component={Favorites} 
                />

                {/* <Tab.Screen 
                    options={{
                        headerShown: false,
                        tabBarIcon: ({ color, size, focused}) => {
                            if(focused){
                                return<Ionicons name="ios-person" size={30} color={color} />
                            }
                            
                            return<Ionicons name="ios-person-outline" size={size} color={color} />
                        }
                            
                    }} 
                    name='Login'
                    component={Login} 
                /> */}
            </Tab.Navigator>
        </ThemeContextProvider>

    );
}