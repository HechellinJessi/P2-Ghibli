import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { View } from "react-native";
import { ThemeContextProvider, useTheme } from '../../Context/ThemeContext';



const ThemeScreen = () => {
    const { toggleThemeType, themeType, isDarkTheme, theme } = useTheme();

    return (
        <View>
          <Ionicons name='md-sunny' size={30} onPress={toggleThemeType}/>
        </View>
    )
}

export default ThemeScreen;