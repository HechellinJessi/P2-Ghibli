import { View, Text, Image, Button } from 'react-native';
import { styles } from './styles';
import telaone from '../../assets/Image/imgOne.png'
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../routes/StackNavigation';
import Buttons from '../../Components/Buttons';

type homeScreenProp =  NativeStackNavigationProp<RootStackParamList, "BemVindo">

export default function BemVindo(){
    const navigation =  useNavigation<homeScreenProp>()
    return(
        <View style={styles.container}>
            <Image style={styles.image} source={telaone}/>
            <Text style={styles.title}>Welcome To Studio Glibli Library.</Text>
            <Buttons title='Next' onPress={() => navigation.navigate('Informacao')}/>
        </View>

    );
};
