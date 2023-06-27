import React, { useState, useEffect } from 'react';
import {View, StyleSheet, Image, Text, TextInput, Alert, TouchableOpacity,} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function Login() {

    const [name, setName] = useState('');

    useEffect(() => {
        getData();
    }, []);

    const getData = () => {
        try {
            AsyncStorage.getItem('UserData')
                .then(value => {
                    if (value != null) {
                        //navigation.navigate('Home');
                    }
                })
        } catch (error) {
            console.log(error);
        }
    }

    const setData = async () => {
        if (name.length == 0) {
            Alert.alert('Warning!', 'Please write your data.')
        } else {
            try {
                var user = {Name: name}
                await AsyncStorage.setItem('UserData', JSON.stringify(user));
                // navigation.navigate('Home');
            } catch (error) {
                console.log(error);
            }
        }
    }

    return (
        <View>
            <Text>
                Async Storage
            </Text>
            <TextInput
                onChangeText={(value) => setName(value)}
                placeholder='Insira seu nome'
            />
            <TouchableOpacity onPress={setData}>
            <Text>Entrar</Text>
            </TouchableOpacity>
            <Text>Seu nome é {name}</Text>
        </View>
    )
}