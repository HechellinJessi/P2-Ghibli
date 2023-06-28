import React, { useState, useEffect } from 'react';
import { View, TextInput, Text, Alert, TouchableOpacity} from 'react-native';
import { styles } from './styles';
import { SafeAreaView } from 'react-native-safe-area-context';
import GitComponent from '../../Components/GitComponent'
import { Headline } from 'react-native-paper';


import carol from '../../assets/Image/hakuDragon.png'
import hechelin from '../../assets/Image/chihiro.png'
import julia from '../../assets/Image/Ponyo.png'
import maria from '../../assets/Image/kiki.png'
import sophia from '../../assets/Image/mononoke.png'

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

    <SafeAreaView>
      <View style={styles.container}>
      <View>
        <Headline style={styles.title}>Sobre Nós</Headline>
      </View>
      <View style={styles.gitContainer}>
        <GitComponent
          imageSource={carol}
          name="Ana Carolina Albertini"
          githubUsername="/carolalbertini" />

        <GitComponent
          imageSource={hechelin}
          name="Hechelin Jessi"
          githubUsername="/HechelinJessi" />

        <GitComponent
          imageSource={julia}
          name="Julia Soares Moraes"
          githubUsername="/JuSMoraes" />

        <GitComponent
          imageSource={maria}
          name="Maria Antônia de Rezende"
          githubUsername="/Mariaantonia4000" />

        <GitComponent
          imageSource={sophia}
          name="Sophia Resende de Freitas"
          githubUsername="/Soph-ya" />
      </View>
      <View>
        <Text style={{marginTop: 50, padding: 5, fontSize:16}}>Envie um comentário:</Text>
        <TextInput
          style={styles.input}
          placeholder="A gente é muito boa..."
          value={comment}
          onChangeText={setComment}
        />
       <TouchableOpacity style={styles.button}  onPress={sendComment}>
            <Text style={styles.buttonTitle}>Enviar</Text>
        </TouchableOpacity>

        {submittedComments.length > 0 && (
          <View style={{ marginTop: 20 }}>
            <Text>Comentários Enviados:</Text>
            {submittedComments.map((submittedComment, index) => (
              <Text style={styles.comment} key={index}>{submittedComment}</Text>
            ))}
          </View>
        )}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default AboutUs;