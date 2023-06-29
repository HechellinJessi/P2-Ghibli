import React, { useEffect, useState } from 'react';
import { SafeAreaView, ScrollView, TextInput, Text, FlatList, TouchableOpacity, View } from 'react-native';
import { fetchFilms, Film } from '../../services/Api';
import { Card } from '../../Components/CardMovies';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { styles } from './styles';
import Modal from '../../Components/Modal';
import { Headline } from 'react-native-paper';
import ThemeScreen from '../../Components/ButtonTheme';
import { AntDesign } from '@expo/vector-icons';

export default function Home() {
  const [films, setFilms] = useState<Film[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [favoriteFilms, setFavoriteFilms] = useState<Film[]>([]);
  const [selectedDirector, setSelectedDirector] = useState<string>('');
  const [showDirectorsFilter, setShowDirectorsFilter] = useState<boolean>(false);

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

  const handleResetFilter = () => {
    setSelectedDirector('');
  };

  const filterFilmsByDirector = (director: string) => {
    setSelectedDirector(director);
  };

  const filteredFilms = films.filter((film) => {
    const isMatchingSearch =
      film.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      film.original_title_romanised.toLowerCase().includes(searchQuery.toLowerCase());

    if (!selectedDirector) {
      return isMatchingSearch;
    }

    return isMatchingSearch && film.director.toLowerCase() === selectedDirector.toLowerCase();
  });

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ alignItems: "center" }}>
        <ThemeScreen />
      </View>
      <Headline style={styles.title}>Procure pelo seu filme Ghibli favorito:</Headline>
      <TextInput
        style={styles.input}
        onChangeText={(text) => setSearchQuery(text)}
        value={searchQuery}
        placeholder="Buscar..."
      />
      <TouchableOpacity
        onPress={() => setShowDirectorsFilter(!showDirectorsFilter)}
      >
        <Headline style={styles.showHideButtonText}>
          {showDirectorsFilter ? <AntDesign name="right" size={16} color="black" /> : <AntDesign name="down" size={16} color="black" />}
        </Headline>
      </TouchableOpacity>

      {showDirectorsFilter && (
        <View style={styles.directorsFilter}>
          <View style={styles.containerTitle}>
            <TouchableOpacity
              style={[
                styles.titleButtons,
                selectedDirector === 'Hayao Miyazaki' && styles.selectedButton,
              ]}
              onPress={() => filterFilmsByDirector('Hayao Miyazaki')}
            >
              <Text style={[styles.buttonText, selectedDirector === 'Hayao Miyazaki' && styles.selectedButtonText]}>
                Hayao Miyazaki
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.titleButtons,
                selectedDirector === 'Yoshifumi Kondō' && styles.selectedButton,
              ]}
              onPress={() => filterFilmsByDirector('Yoshifumi Kondō')}
            >
              <Text style={[styles.buttonText, selectedDirector === 'Yoshifumi Kondo' && styles.selectedButtonText]}>
                Yoshifumi Kondo
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.containerTitle}>
            <TouchableOpacity
              style={[
                styles.titleButtons,
                selectedDirector === 'Gorō Miyazaki' && styles.selectedButton,
              ]}
              onPress={() => filterFilmsByDirector('Gorō Miyazaki')}
            >
              <Text style={[styles.buttonText, selectedDirector === 'Goro Miyazaki' && styles.selectedButtonText]}>
                Goro Miyazaki
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.titleButtons,
                selectedDirector === 'Hiromasa Yonebayashi' && styles.selectedButton,
              ]}
              onPress={() => filterFilmsByDirector('Hiromasa Yonebayashi')}
            >
              <Text style={[styles.buttonText, selectedDirector === 'Hiromasa Yonebayashi' && styles.selectedButtonText]}>
                Hiromasa Yonebayashi
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.containerTitle}>
            <TouchableOpacity
              style={[
                styles.titleButtons,
                selectedDirector === 'Hiroyuki Morita' && styles.selectedButton,
              ]}
              onPress={() => filterFilmsByDirector('Hiroyuki Morita')}
            >
              <Text style={[styles.buttonText, selectedDirector === 'Hiroyuki Morita' && styles.selectedButtonText]}>
                Hiroyuki Morita
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.titleButtons,
                !selectedDirector && styles.selectedButton,
              ]}
              onPress={handleResetFilter}
            >
              <Text
                style={[
                  styles.buttonText,
                  !selectedDirector && styles.selectedButtonText,
                ]}
              >
                Todos
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      )}

      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <FlatList
          scrollEnabled={false}
          data={filteredFilms}
          renderItem={({ item }) => (
            <View style={styles.cardContainer}>
              <Card
                title={item.title}
                image={item.image}
                onPressAdd={() => { }}
                onPressFavorite={() => toggleFavorite(item.title)}
                isFavorite={favoriteFilms.some((film) => film.title === item.title)}
              />
              <Modal film={item} />
            </View>
          )}
          keyExtractor={(item) => item.id}
          numColumns={2}
        />
      </ScrollView>
    </SafeAreaView>
  );
}
