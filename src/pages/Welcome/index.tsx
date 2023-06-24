import React from 'react'
import { View, Text, Image } from 'react-native';

import Button from "../../Components/Button" 

import { styles } from './styles';

import telaone from '../../assets/Image/imgOne.png'

export default function Welcome(){
    return(
        <View style={styles.container}>
            <Image style={styles.image} source={telaone}/>
            <Text style={styles.title}>Welcome To Studio Glibli Library.</Text>
            <Button value="Next"></Button>          
        </View>

    );
};