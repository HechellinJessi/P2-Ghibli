import React, { useState, useEffect } from 'react';
import { View, Image, Text, TextInput, Alert, Keyboard, TouchableWithoutFeedback, KeyboardAvoidingView, } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { styles } from './styles';

import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../routes/StackNavigation';

import imgThree from "../../assets/Image/imgThree.png";
import Buttons from '../../Components/Buttons';

type informacaoScreenProp = NativeStackNavigationProp<RootStackParamList, "Login">
export default function Login() {
    const navigation = useNavigation<informacaoScreenProp>()

    const [name, setName] = useState('');

    useEffect(() => {
        getData();
    }, []);

    const getData = () => {
        try {
            AsyncStorage.getItem('UserData')
                .then(value => {
                    if (value != null) {
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
                var user = { Name: name }
                await AsyncStorage.setItem('UserData', JSON.stringify(user));
                navigation.navigate('Splash');
            } catch (error) {
                console.log(error);
            }
        }
    }

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.container}>
                <KeyboardAvoidingView behavior="position" enabled>
                    <Image style={styles.image} source={imgThree} />
                    <Text style={styles.title}>
                        Login
                    </Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={(value) => setName(value)}
                        placeholder='Insira seu nome'
                    />
                    <View style={styles.boxLogin}> 
                        <Buttons
                            title='Entrar'
                            onPress={() => {
                                setData()
                            }} />
                    </View>
                    <Text style={styles.welcomeText}>Bem vindo, {name}</Text>
                </KeyboardAvoidingView>
            </View>
        </TouchableWithoutFeedback>
    )
}