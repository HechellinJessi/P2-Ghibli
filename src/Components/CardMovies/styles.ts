import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({

  cardContainer: {

    borderRadius: 10,
    height: 320,
    width: 180,
    justifyContent: "space-between"

  },

  card:{
    justifyContent:"space-evenly"
  },

  cardContainerImage: {
    alignItems: "center",
    width: "100%",
    
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