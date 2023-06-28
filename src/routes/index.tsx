import { NavigationContainer } from "@react-navigation/native";
import StackNavigator from './StackNavigation';
import { ThemeContextProvider } from "../Context/ThemeContext";

export default function(){
    return(
        <ThemeContextProvider>
        {/* <NavigationContainer > */}
            <StackNavigator />
        {/* </NavigationContainer> */}

        </ThemeContextProvider>
    )
}