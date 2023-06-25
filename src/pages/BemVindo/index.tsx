import { View, Text, Image } from 'react-native';

import Button from "../../Components/Buttons"

import { styles } from './styles';

import telaone from '../../assets/Image/imgOne.png'

export default function BmVindo(){
    return(
        <View style={styles.container}>
            <Image style={styles.image} source={telaone}/>
            <Text style={styles.title}>Welcome To Studio Glibli Library.</Text>
            <Button value="Next"></Button>          
        </View>

    );
};
