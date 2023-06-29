import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  AreaView: {
  justifyContent: 'center',
  marginBottom: 135
  },
  titleText: {
    fontSize: 30,
    textAlign: 'center',
    paddingTop: 50,
    marginBottom: 5
  },
  noFavoritesContainer: {
    display: 'flex',
    alignContent: 'center',
    alignItems: 'center',
    marginTop: 100
  },
  noFavoritesText: {
    fontSize: 18,
    textAlign: 'center',
  },
  cardContainer: {
    borderRadius: 10,
    width: 180,
    margin: 5,
    justifyContent: 'space-evenly',
  },
  image: {
    height: 320,
    width: 250,
  }
});