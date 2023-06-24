import React, { useEffect, useState } from 'react';
import { SafeAreaView, ScrollView, TextInput, Text } from 'react-native';
import { fetchFilms, Film } from '../../services/Api';
import { Card } from '../../Components/CardMovies';
import { styles } from './styles'

export default function Home() {
  const [films, setFilms] = useState<Film[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>('');

  useEffect(() => {
    async function fetchFilmsData() {
      const filmsData = await fetchFilms();
      setFilms(filmsData);
    }

    fetchFilmsData();
  }, []);

  const filteredFilms = films.filter((film) =>
    film.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <SafeAreaView>
        <Text style={styles.title} >Procure pelo seu filme Ghibli favorito:</Text>
      <TextInput
        style={styles.input}
        onChangeText={(text) => setSearchQuery(text)}
        value={searchQuery}
        placeholder="Buscar..."
      />

      <ScrollView>
        {filteredFilms.map((film) => (
          <Card key={film.id} title={film.title} image={film.image} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}
