import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({

  cardContainer: {
    backgroundColor: "#4D6DBF55",
    borderRadius: 10,
    margin: 5,
    padding: 5,

  },

  cardContainerImage: {
    alignItems: "center"
  },

  cardImage: {
    width: '98%',
    height: 500,
    marginTop: 5,
    borderRadius: 10,
  },

  titleContainer: {
    position: 'absolute',
    top: 10,
    backgroundColor: '#fff3',
    fontWeight: 'bold',
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },

  iconsStyle: {
    justifyContent: "center",
    flexDirection: "row"
  },

  iconStyle: {
    marginRight: 15,
    padding: 15
  }

})