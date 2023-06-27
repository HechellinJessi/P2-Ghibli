import { StyleSheet, Text, View, TouchableOpacity}  from "react-native";

import { style } from "./styles";

type ButtonProps = {
    value: String,
    // callback: Function;
}

const Buttons = (props : ButtonProps) => {
    return(
        <View style={style.container}>
        <TouchableOpacity
         style={style.button}
        onPress={() => {}}>
            <Text style={style.value}>{props.value}</Text>
        </TouchableOpacity>
        </View>
    );
}

export default Buttons;