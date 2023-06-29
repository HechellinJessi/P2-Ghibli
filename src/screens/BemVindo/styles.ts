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
        textAlign: 'center',
        fontSize:30,
        marginTop:500,
        color: "#fff",
        fontWeight:"500",
    },
    subTitle:{
        fontSize:15,
        marginTop:420,
        color: "#fff",
        fontWeight:"500",
        marginLeft:30
    },
    button: {
        justifyContent: "center",
        alignItems: "center",
        margin: 150
    }
});