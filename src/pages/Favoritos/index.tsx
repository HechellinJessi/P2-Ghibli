import React, { useEffect, useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import { Card } from '../../Components/CardMovies';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface Film {
  id: string;
  title: string;
  image: string;
}

export default function Favorites() {
  const [favoriteFilms, setFavoriteFilms] = useState<Film[]>([]);

  useEffect(() => {
    getFavoriteFilms();
  }, []);

  const getFavoriteFilms = async () => {
    try {
      const filmlist = await AsyncStorage.getItem('favoriteFilms');
      if (filmlist !== null) {
        const films = JSON.parse(filmlist);
        setFavoriteFilms(films);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const removeFavoriteFilm = async (filmId: string) => {
    try {
      const updatedFilms = favoriteFilms.filter((film) => film.id !== filmId);
      setFavoriteFilms(updatedFilms);
      await AsyncStorage.setItem('favoriteFilms', JSON.stringify(updatedFilms));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={{marginTop: 50, marginLeft: 15}}>
      {favoriteFilms.length > 0 ? (
        <FlatList
          data={favoriteFilms}
          renderItem={({ item }) => (
            <Card
              title={item.title}
              image={item.image}
              onPressFavorite={() => removeFavoriteFilm(item.id)}
              isFavorite={true}
            />
          )}
          keyExtractor={(item) => item.id}
          numColumns={2}
        />
      ) : (
        <Text>Você ainda nao tem filmes favoritos D:</Text>
      )}
    </View>
  );
}
