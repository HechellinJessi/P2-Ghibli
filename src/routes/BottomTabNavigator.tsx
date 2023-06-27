import React from 'react';
import Home from '../pages/Home'
import Favorites from '../pages/Favoritos';
import BemVindo from '../pages/BemVindo';
import Login from '../pages/Login';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { MaterialIcons, Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator<RootTabParamList>();


export type RootTabParamList = {
	Home: undefined;
	Favorites: undefined;
	BemVindo: undefined;
    Login: undefined;
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
                        paddingBottom: 2, 
                        borderTopLeftRadius:30,
                        borderTopRightRadius: 30
                    }
                }}>
                <Tab.Screen 
                    options={{
                        headerShown: false,
                        tabBarIcon: ({ color, size, focused}) => {
                            if(focused){
                                return<Ionicons name="home" size={30} color={color} />
                            }
                            
                            return<Ionicons name="home-outline" size={size} color={color} />
                        }
                            
                    }} 
                    name='Home'
                    component={Home} 
                />
                <Tab.Screen 
                    options={{
                        headerShown: false,
                        tabBarIcon: ({ color, size, focused}) => {
                            if(focused){
                                return<Ionicons name="game-controller" size={32} color={color} />
                            }
                            
                            return<Ionicons name="game-controller-outline" size={size} color={color} />
                        }
                            
                    }} 
                    name='BemVindo'
                    component={BemVindo} 
                />
                <Tab.Screen 
                    options={{
                        headerShown: false,
                        tabBarIcon: ({ color, size, focused}) => {
                            if(focused){
                                return<MaterialIcons name="favorite" size={30} color={color} />
                            }
                            
                            return<MaterialIcons name="favorite-outline" size={size} color={color} />
                        }
                            
                    }} 
                    name='Favorites'
                    component={Favorites} 
                />
                <Tab.Screen 
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
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
}