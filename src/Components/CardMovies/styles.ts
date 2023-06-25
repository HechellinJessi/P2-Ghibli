import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({

  cardContainer: {
    backgroundColor: "#4D6DBF55",
    borderRadius: 10,
    marginRight: 5,
    marginBottom: 5,
    padding: 5,
    height: 320,
    width: 180,
    justifyContent: "space-between"

  },

  cardContainerImage: {
    alignItems: "center",
    
  },

  cardImage: {
    width: 160,
    height: 220,
    marginTop: 5,
    borderRadius: 10,
  },

  titleContainer: {
    fontWeight: 'bold',
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  cardTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    width: 165,
    textAlign:"center"
  },

  iconsStyle: {
    justifyContent: "center",
    flexDirection: "row",
    alignContent:"flex-end"
  },

  iconStyle: {
    marginRight: 15,
    padding: 10
  }

})