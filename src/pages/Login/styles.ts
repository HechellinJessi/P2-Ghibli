import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({

   container: {
        backgroundColor: '#1CC8DF',
        display: 'flex',
        alignItems: 'center',
        height: '100%'
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

buttonText: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 20
},

imput: {
    paddingVertical: 12,
    paddingHorizontal: 100,
    backgroundColor: '#fff',
    marginVertical: 20,
    borderRadius: 10,
    borderColor: 'black',
    borderWidth: 1
},

welcomeText: {
    paddingTop: 50,
    color: 'white',
    fontWeight: '700',
    fontSize: 20,
    textAlign: "center"
}

})