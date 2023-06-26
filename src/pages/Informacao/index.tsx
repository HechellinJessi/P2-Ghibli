import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { styles } from "./styles"

import Buttons from "../../Components/Buttons";

import teletwo from "../../assets/Raskrasil.com-Coloring-Pages-Totoro-44-removebg-preview-removebg-preview.png"


export default function () {
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={teletwo} />
            <TouchableOpacity>
                <View style={styles.box}>
                    <View style={styles.bowtwo}>
                        <Text style={styles.title}>Manga</Text>
                    </View>
                    <View style={styles.bowtrhee}>
                        <Text style={styles.title}>Anime</Text>
                    </View>
                    <View style={styles.bowfor}>
                        <Text style={styles.title}>History</Text>
                    </View>
                </View>
                <View style={styles.boxone}>
                    <Text style={styles.title}>Studio</Text>
                </View>
            </TouchableOpacity>
            <Buttons value={"Next"}/>
        </View>
    )
};
