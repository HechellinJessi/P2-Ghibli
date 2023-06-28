import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({

   container: {
        flex: 1,
        backgroundColor: '#1CC8DF',
        display: 'flex',
        alignItems: 'center'
   },

   title:{
    fontSize:30,
    marginTop:20,
    color: "#fff",
    fontWeight:'bold',
    textAlign: 'center'
},

image: {
    marginTop:50,
    height: 240,
    width: 200
},

button: {
    backgroundColor: '#062451',
    paddingVertical: 15,
    paddingHorizontal: 100,
    borderRadius: 50
},

buttonText: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 20
},

imput: {
    paddingVertical: 10,
    paddingHorizontal: 100,
    backgroundColor: '#fff',
    marginVertical: 20,
    borderRadius: 50,
    borderColor: 'black',
    borderWidth: 1
},

welcomeText: {
    paddingTop: 50,
    color: 'white',
    fontWeight: '700',
    fontSize: 20
}

})