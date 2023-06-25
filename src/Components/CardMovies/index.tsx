import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

interface CardProps {
  title: string;
  image: string;
  onPressAdd?: () => void;
  onPressFavorite?: () => void;
  isFavorite?: boolean;
}

export const Card: React.FC<CardProps> = ({ title, image, onPressAdd, onPressFavorite, isFavorite }) => {
  return (
    <View>
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
              <AntDesign style={styles.iconStyle} name="plus" size={24} color="black" />
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
