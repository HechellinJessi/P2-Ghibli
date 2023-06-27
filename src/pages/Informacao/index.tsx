import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { styles } from "./styles"

import Buttons from "../../Components/Buttons";
import { useNavigation } from "@react-navigation/native";

import imgTwo from "../../assets/Image/imgTwo.png"


export default function () {


    return (
        <View style={styles.container}>
            <Image style={styles.image} source={imgTwo} />
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
