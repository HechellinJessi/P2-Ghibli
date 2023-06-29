import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import { Headline } from 'react-native-paper';
import { AntDesign } from '@expo/vector-icons';

const GitComponent = ({ imageSource, name, githubUsername }) => {
  return (
    <View>
      <View style={styles.gitComponent}>
        <Image style={styles.cardImage} source={imageSource} />
        <View style={styles.textContainer}>
          <Headline style={styles.name}>{name}</Headline>
          <Headline style={styles.github}>
            <AntDesign name="github" size={24} color="black" />
            {githubUsername}
          </Headline>
        </View>
      </View>
    </View>
  );
};
export default GitComponent;



