import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Image, StyleSheet } from 'react-native';
import axios from 'axios';

const DirectorsPage = () => {
  const [directors, setDirectors] = useState([]);

  useEffect(() => {
    fetchDirectors();
  }, []);

  const fetchDirectors = async () => {
    try {
      const response = await axios.get('https://ghibliapi.vercel.app/films');
      const films = response.data;
      const directorsData = films.map((film) => film.director);
      const uniqueDirectors = [...new Set(directorsData)];
      setDirectors(uniqueDirectors);
    } catch (error) {
      console.error(error);
      setDirectors([]);
    }
  };

  const renderDirector = ({ item }) => (
    <View style={styles.directorContainer}>
      
      <Text style={styles.directorName}>{item}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Diretores</Text>
      <FlatList
        data={directors}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderDirector}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  directorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  directorImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 8,
  },
  directorName: {
    fontSize: 16,
  },
});

export default DirectorsPage;
