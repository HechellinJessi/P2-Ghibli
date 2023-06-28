import React, { useState, useEffect } from 'react';
import {View, StyleSheet, Image, Text, TextInput, Alert, TouchableOpacity,} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { styles } from './styles';

import imgThree from "../../assets/Image/imgThree.png";

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
            Alert.alert('Aviso!', 'Por favor, insira seu nome.')
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
        <View style={styles.container}>
            <Image style={styles.image} source={imgThree}/>
            <Text style={styles.title}>
                Login
            </Text>
            <TextInput
                style={styles.imput}
                onChangeText={(value) => setName(value)}
                placeholder='Insira seu nome'
            />
            <TouchableOpacity style={styles.button} onPress={setData}>
            <Text style={styles.buttonText}>Entrar</Text>
            </TouchableOpacity>
            <Text style={styles.welcomeText}>Bem vindo, {name}</Text>
        </View>
    )
}