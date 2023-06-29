import React, { useState, useEffect } from "react";
import { Ionicons } from "@expo/vector-icons";
import { View } from "react-native";
import { ThemeContextProvider, useTheme } from '../../Context/ThemeContext';

const ThemeScreen = () => {
    const { toggleThemeType, isDarkTheme } = useTheme();
    const [iconName, setIconName] = useState('md-sunny');
    const iconColor = isDarkTheme ? "white" : "black";

    useEffect(() => {
        setIconName(isDarkTheme ? 'md-sunny' : 'md-moon');
    }, [isDarkTheme]);

    const toggleIcon = () => {
        if (iconName === 'md-moon') {
            setIconName('md-sunny');
        } else {
            setIconName('md-moon');
        }
        toggleThemeType();
    };

    return (
        <View>
            <Ionicons name={iconName} size={24} color={iconColor} onPress={toggleIcon} />
        </View>
    )
}

export default ThemeScreen;
