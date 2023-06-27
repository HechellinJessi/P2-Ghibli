import React from "react";
import {TextInput} from "react-native";
import { styles } from './styles'

const Input = ( props, secureTextEntry ) => {
    return (

        <TextInput
        secureTextEntry={props.hide}
        style={styles.input}
        placeholder={props.placeHolder}
        />


    );
  };

export default Input;