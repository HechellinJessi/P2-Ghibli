import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({

    container: {
        display: 'flex',
        alignItems: 'center',
        backgroundColor: "#1CC8DF"
    },
    
    image: {
        position: 'absolute',
        top: '25%',
        // left: '20%',
        width: 200,
        height: 200
    },

    box: {
        flexDirection: "row",
        marginTop: 270,
        right: 60,
        justifyContent: "center"

    },

    boxone: {
        width: 143,
        height: 57,
        borderRadius: 10,
        left: "25%",
        backgroundColor: "#AA77D2",
        alignItems: "center",
        justifyContent: "center"
    },

    bowtwo: {
        width: 103,
        height: 57,
        borderRadius: 10,
        marginTop: 100,
        left: "35%",
        backgroundColor: "#310864",
        alignItems: "center",
        justifyContent: "center",

    },

    bowtrhee: {
        width: 103,
        height: 57,
        borderRadius: 10,
        marginTop: 100,
        left: "35%",
        backgroundColor: "#4D6DBF",
        alignItems: "center",
        justifyContent: "center",
        margin: 7
    },

    bowfor: {
        width: 103,
        height: 57,
        borderRadius: 10,
        marginTop: 100,
        left: "35%",
        backgroundColor: "#10E9DC",
        alignItems: "center",
        justifyContent: "center"
    },
    title: {
        fontSize: 25,
        color: "#fff"
    },

    buttonsContainer: {
        padding: 0
    },

    button: {
        padding:12,
        width: 300,
        borderRadius:10,
        marginTop: '20%',
        // marginLeft:30
    }

})