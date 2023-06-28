import React, { useState, useEffect } from 'react';
import { View, TextInput, Button, Text, Alert } from 'react-native';
import { styles } from './styles';

const AboutUs = () => {
  const [comment, setComment] = useState('');
  const [submittedComments, setSubmittedComments] = useState([]);

  const sendComment = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
          body: comment,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      });

      const json = await response.json();
      Alert.alert('Comentário enviado com sucesso!');
      console.log(json);

      setSubmittedComments((prevComments) => [...prevComments, comment]);

      setComment('');
    } catch (error) {
      console.error(error);
      Alert.alert('Ocorreu um erro ao enviar o comentário.');
    }
  };

  return (
    <View>
      <TextInput
        style={{ padding: 10, marginBottom: 10, marginTop: 150 }}
        placeholder="Digite seu comentário"
        value={comment}
        onChangeText={setComment}
      />
      <Button title="Enviar Comentário" onPress={sendComment} />
      <Text>Comentários Enviados:</Text>

      {submittedComments.length > 0 && (
        <View >
        {submittedComments.map((submittedComment, index) => (
              <Text style={styles.comentarios} key={index}>{submittedComment}</Text>
              ))}
              </View>
      )}
      </View>
  );
};

export default AboutUs;
