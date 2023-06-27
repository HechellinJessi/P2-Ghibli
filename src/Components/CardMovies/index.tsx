import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import { MaterialIcons } from '@expo/vector-icons';


interface CardProps {
  // id: string;
  title: string;
  image: string;
  onPressAdd?: () => void;
  onPressFavorite?: () => void;
  isFavorite?: boolean;
}

export const Card: React.FC<CardProps> = ({ title, image, onPressAdd, onPressFavorite, isFavorite }) => {
  return (
    <View style={styles.card}>
      <View style={styles.cardContainer}>
        <TouchableOpacity style={styles.cardContainerImage}>
          <Image style={styles.cardImage} source={{ uri: image }} />
          <View style={styles.titleContainer}>
            <Text style={styles.cardTitle}>{title}</Text>
            
          </View>
        </TouchableOpacity>

        <View style={styles.iconsStyle}>
          {onPressAdd && (
            <TouchableOpacity onPress={onPressAdd}>         
            </TouchableOpacity>
          )}

          {onPressFavorite && (
            <TouchableOpacity onPress={onPressFavorite}>
              <MaterialIcons style={styles.iconStyle} name={isFavorite ? 'favorite' : 'favorite-border'} size={24} color="red" />
            </TouchableOpacity>
          )}
        </View>
      </View>
    </View>
  );
};



