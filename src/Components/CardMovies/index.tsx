import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { styles } from './styles';

interface CardProps {
  title: string;
  image: string;
}

export const Card: React.FC<CardProps> = ({ title, image }) => {


  return (
    <View >
      <View>
        <TouchableOpacity >

          <Image style={styles.cardImage} source={{ uri: image }} />

          <View style={styles.titleContainer}>
            <Text style={styles.cardTitle}>{title}</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};
