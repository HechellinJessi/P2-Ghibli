import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#1CC8DF',
        height: '100%'
    },
    title: {
        fontSize: 30,
        marginTop: 20,
        color: "#fff",
        fontWeight: 'bold',
        textAlign: 'center'
    },
    image: {
        marginLeft: 50,
        height: 240,
        width: 200
    },
    buttonText: {
        color: '#fff',
        fontWeight: '700',
        fontSize: 20
    },
    input: {
        height: 52,
        width: 300,
        backgroundColor: '#fff',
        margin: 5,
        borderRadius: 10,
        borderColor: 'black',
        borderWidth: 1,
        paddingLeft: 15
    },
    boxLogin: {
        alignItems: 'center'
    },
    welcomeText: {
        marginTop: 10,
        color: 'white',
        fontWeight: '700',
        fontSize: 20,
        textAlign: "center"
    }
})