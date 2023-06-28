import { Text, TouchableOpacity}  from "react-native";

import { style } from "./styles";

const Buttons = ({title, onPress, ...props}) => {
    return(
        <TouchableOpacity
         style={style.button}
        onPress={onPress}>
            <Text style={style.value}>{title}</Text>
        </TouchableOpacity>
    );
}

export default Buttons;