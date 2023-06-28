import React, { useEffect, useState } from 'react';
import { Alert, Modal, StyleSheet, Text, Pressable, View, Image } from 'react-native';
import { styles } from './styles';
import { Film } from '../../services/Api';
import { Headline } from 'react-native-paper';
import { AntDesign } from '@expo/vector-icons';

type ModalDescriptionProps = {
    film: Film;
};

const ModalDescription: React.FC<ModalDescriptionProps> = ({ film }) => {
    const [modalVisible, setModalVisible] = useState(false);

    return (
        <View style={styles.centeredView}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    Alert.alert('Modal has been closed.');
                    setModalVisible(!modalVisible);
                }}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Image source={{ uri: film.movie_banner }} />
                        <Text style={styles.modalText}>Titulo: {film.title}</Text>
                        <Text style={styles.sinopse}>Sinopse: {film.description}</Text>
                        <Text style={styles.modalText}>Diretor: {film.director}</Text>
                        <Text style={styles.modalText}>Produtor: {film.producer}</Text>
                        <Text style={styles.modalText}>Ano de lançamento: {film.release_date}</Text>
                        <Text style={styles.modalText}>Pontuação: {film.rt_score}</Text>
                        <Pressable
                            style={[styles.buttonClose]}
                            onPress={() => setModalVisible(!modalVisible)}
                        >
                            <Text style={styles.textStyle}>Hide Modal</Text>
                        </Pressable>
                    </View>
                </View>
            </Modal>
            <Pressable
                style={[styles.buttonOpen]}
                onPress={() => setModalVisible(true)}
            >
                <AntDesign name="plus" size={24} color="black" />
            </Pressable>
        </View>
    );
};

export default ModalDescription;