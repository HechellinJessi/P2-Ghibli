import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, SafeAreaView } from 'react-native';
import Input from '../../Components/Input';
import { styles } from './styles'
import api from '../../services/Api_login';

const Register = () => {
const [email, setEmail] = useState('');
const [senha, setSenha] = useState(''); 
const [confirmarSenha, setConfirmarSenha] = useState('');
const [usuarios, setUsuarios] = useState([]);


return (
    <SafeAreaView style={styles.container}>
      <View >
              <View>
            <Text>Endereço de e-mail</Text>
            <Input />
          </View>
          <View >
            <Text>Senha</Text>
            <Input />
            <Text>Confirmar Senha</Text>
            <Input />
          </View>
          <TouchableOpacity>
            <Text style={styles.button}>Registrar</Text>
          </TouchableOpacity>
        </View>

    </SafeAreaView>
  );
};

export default Register;