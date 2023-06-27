import React from 'react';
import Home from '../pages/Home'
import Favorites from '../pages/Favoritos';
import BemVindo from '../pages/BemVindo';

import Informacao from '../pages/Informacao';

import { createNativeStackNavigator} from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { MaterialIcons, Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator<RootTabParamList>();
const Stack = createNativeStackNavigator();

export type RootStackParamList = {
    BemVindo: undefined,
    Informacao: undefined

}

export type RootTabParamList = {
	Home: undefined;
	Favorites: undefined;
	BemVindo: undefined;

}

function StackNavigator(){
    return(
        <Stack.Navigator
        screenOptions={{
            headerShown:false
        }}>
            <Stack.Screen name='BemVindo' component={BemVindo}/>
            <Stack.Screen name='Informacao' component={Informacao} />
        </Stack.Navigator>
    )

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

                    component={StackNavigator} 

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