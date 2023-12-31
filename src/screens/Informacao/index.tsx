import React from "react";
import { View, Text, Image } from "react-native";
import { styles } from "./styles"

import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../routes/StackNavigation";

import imgTwo from "../../assets/Image/imgTwo.png"
import Buttons from "../../Components/Buttons";

type informacaoScreenProp = NativeStackNavigationProp<RootStackParamList, "Informacao">
export default function Informacao() {
    const navigation = useNavigation<informacaoScreenProp>()

    return (
        <View style={styles.container}>
            <Image style={styles.image} source={imgTwo} />

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
            <View style={styles.button}>
                <Buttons title='Next' onPress={() => navigation.navigate('Login')} />
            </View>
        </View>
    )
};
