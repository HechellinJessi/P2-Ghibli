import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingTop: 20,
  },

  AreaView: {
    marginTop: 55,
    margin: 5
  },

  noFavoritesContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  noFavoritesText: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  cardContainer: {
    borderRadius: 10,
    height: 320,
    width: 180,
    margin: 5,
    justifyContent: 'space-evenly',

  },
});
