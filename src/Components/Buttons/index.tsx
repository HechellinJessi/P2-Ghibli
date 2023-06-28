import { Text, TouchableOpacity}  from "react-native";

import { styles } from "./styles";


const Buttons = ({title, onPress, ...props}) => {
    return(
        <TouchableOpacity
         style={style.button}
        onPress={onPress}>
            <Text style={style.value}>{title}</Text>
const Buttons = ({title, onPress}) => {
    return(
        <TouchableOpacity
         style={[styles.button]}
        onPress={onPress}>
            <Text style={styles.value}>{title}</Text>

        </TouchableOpacity>
    );
}

export default Buttons;