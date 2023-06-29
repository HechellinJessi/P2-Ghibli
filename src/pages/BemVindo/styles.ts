import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#1CC8DF'
    },
    image:{
        position: 'absolute',
        top: '15%',
        left: '20%',
    },
    title:{
        fontSize:30,
        marginTop:370,
        color: "#fff",
        fontWeight:"500",
        marginLeft:30
    },
    subTitle:{
        fontSize:15,
        marginTop:420,
        color: "#fff",
        fontWeight:"500",
        marginLeft:30

    },

    button: {
        padding:12,
        width: 300,
        borderRadius:10,
        marginTop: 100,
        marginLeft:30
    }
});