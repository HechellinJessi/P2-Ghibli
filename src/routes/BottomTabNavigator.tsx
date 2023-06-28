import React from 'react';
import Favorites from '../pages/Favoritos';
import Home from '../pages/Home';
import AboutUs from '../pages/AboutUs';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useTheme } from '../Context/ThemeContext';

import { Ionicons, MaterialIcons } from '@expo/vector-icons';

import { View } from 'react-native';
import { Button } from 'react-native-paper';

export const ThemeScreen = () => {
    const { toggleThemeType, themeType, isDarkTheme, theme } = useTheme();

    return (
        <View>
            <Button mode='contained' onPress={toggleThemeType}>
                Theme
            </Button>
        </View>
    )
}

export type RootTabParamList = {
    Home: undefined;
    Favorites: undefined;
    AboutUs: undefined;

}
const Tab = createBottomTabNavigator<RootTabParamList>();

export function BottomTabNavigator() {

    return (

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
                            return <MaterialIcons name="favorite" size={30} color={color} />
                        }
                        return <MaterialIcons name="favorite-outline" size={size} color={color} />
                    }
                }}
                name='Favorites'
                component={Favorites}
            />
            <Tab.Screen
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color, size, focused }) => {
                        if (focused) {
                            return <Ionicons name="information-circle" size={33} color={color} />
                        }

                        return <Ionicons name="information-circle-outline" size={size} color={color} />
                    }
                }}
                name='AboutUs'
                component={AboutUs}
            />

        </Tab.Navigator>
    );
}