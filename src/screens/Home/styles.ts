import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        margin: 5
    },
    title: {
        marginTop: 35,
        marginLeft: 8,
        fontWeight: 'bold',
        fontSize: 18
    },
    scrollViewContent: {
        paddingBottom: 160,
    },
    showHideButtonText: {
        marginLeft: 15

    },
    directorsFilter: {
        width: "100%",
        justifyContent: "space-evenly",
        height: 150
    },
    containerTitle: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        width: "100%"
    },
    titleButtons: {
        backgroundColor: '#DDDDDD',
        marginRight: 10,
        borderRadius: 10,
        width: 155,
        height: 30,
        alignItems: "center",
        justifyContent: "center"

    },
    selectedDirector: {
        backgroundColor: 'black',
        color: 'white',
    },
    containerInput: {
        borderRadius: 16,
        height: 42,
        padding: 8,
        backgroundColor: "#67686D",
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: "row"
    },
    headerText: {
        marginTop: 30,
        fontSize: 24,
        lineHeight: 45,
        fontWeight: 'bold'
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        margin: 10,
        padding: 5,
        backgroundColor: '#ffffffa3',
        borderRadius: 7
    },
    selectedButtonText: {
        color: '#fff',
    },
    buttonText: {
        fontSize: 14,
    },
    selectedButton: {
        backgroundColor: '#2196F3',
    },
    cardContainer: {
        borderRadius: 10,
        width: 180,
        margin: 5,
        justifyContent: 'space-evenly',

    }
})