import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

interface CardProps {
  title: string;
  image: string;
}

export const Card: React.FC<CardProps> = ({ title, image }) => {


  return (
    <View >
      <View style={styles.cardContainer}>
        <TouchableOpacity style={styles.cardContainerImage}>

          <Image style={styles.cardImage} source={{ uri: image }} />
          <View style={styles.titleContainer}>
            <Text style={styles.cardTitle}>{title}</Text>
          </View>
          </TouchableOpacity>

          <View style={styles.iconsStyle}>

            <TouchableOpacity>
              <AntDesign style={styles.iconStyle} name="plus" size={24} color="black" />
            </TouchableOpacity>

            <TouchableOpacity>
              <MaterialIcons style={styles.iconStyle} name="favorite" size={24} color="red" />
            </TouchableOpacity>

          </View>

      </View>
    </View>
  );
};
