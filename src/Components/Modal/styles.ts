import { StyleSheet } from "react-native";
import { AntDesign } from '@expo/vector-icons';

export const styles = StyleSheet.create({

    centeredView: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 22,
      
      
    },
    modalView: {
      margin: 20,
      height: 500,
      backgroundColor: 'white',
      borderRadius: 20,
      padding: 35,
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
    },
    button: {
      borderRadius: 20,
      padding: 10,
      elevation: 2,
    },
    buttonOpen: {
      backgroundColor: '#2196F3',
      
    },
    buttonClose: {
      backgroundColor: '#2196F3',
      
    },
    textStyle: {
      color: 'white',
      fontWeight: 'bold',
      textAlign: 'center',
    },
    modalText: {
      marginBottom: 15,
      textAlign: 'center',
    },

    sinopse: {
      height: 125,
      marginBottom: 15,
      textAlign: 'center',
      
    },
   

});