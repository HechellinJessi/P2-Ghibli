import React, { useEffect, useState } from 'react';
import { SafeAreaView, ScrollView, TextInput, Text, FlatList } from 'react-native';
import { fetchFilms, Film } from '../../services/Api';
import { Card } from '../../Components/CardMovies';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { styles } from './styles';

export default function Home() {
  const [films, setFilms] = useState<Film[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [favoriteFilms, setFavoriteFilms] = useState<Film[]>([]);

  useEffect(() => {
    async function fetchFilmsData() {
      const filmsData = await fetchFilms();
      setFilms(filmsData);
    }

    fetchFilmsData();
  }, []);

  useEffect(() => {
    async function fetchFavoriteFilms() {
      try {
        const storedFilms = await AsyncStorage.getItem('favoriteFilms');
        const parsedFilms = storedFilms ? JSON.parse(storedFilms) : [];
        setFavoriteFilms(parsedFilms);
      } catch (error) {
        console.error('Erro ao carregar os filmes favoritos:', error);
      }
    }

    fetchFavoriteFilms();
  }, []);

  const filteredFilms = films.filter(
    (film) =>
      film.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      film.original_title_romanised.toLowerCase().includes(searchQuery.toLowerCase()) ||
      film.director.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const toggleFavorite = async (title: string) => {
    try {
      const isFilmFavorite = favoriteFilms.find((film: Film) => film.title === title);

      if (isFilmFavorite) {
        const updatedFilms = favoriteFilms.filter((film: Film) => film.title !== title);
        await AsyncStorage.setItem('favoriteFilms', JSON.stringify(updatedFilms));
        setFavoriteFilms(updatedFilms);
      } else {
        const updatedFilms = [...favoriteFilms, films.find((film: Film) => film.title === title)];
        await AsyncStorage.setItem('favoriteFilms', JSON.stringify(updatedFilms));
        setFavoriteFilms(updatedFilms);
      }
    } catch (error) {
      console.error('Erro ao atualizar os filmes favoritos:', error);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Procure pelo seu filme Ghibli favorito:</Text>
      <TextInput
        style={styles.input}
        onChangeText={(text) => setSearchQuery(text)}
        value={searchQuery}
        placeholder="Buscar..."
      />

      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <FlatList
        scrollEnabled={false}
          data={filteredFilms}
          renderItem={({ item }) => (
            <Card
              title={item.title}
              image={item.image}
              onPressAdd={() => {}}
              onPressFavorite={() => toggleFavorite(item.title)}
              isFavorite={favoriteFilms.some((film) => film.title === item.title)}
            />
          )}
          keyExtractor={(item) => item.id}
          numColumns={2}
        />
      </ScrollView>
    </SafeAreaView>
  );
}
