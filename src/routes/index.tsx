import StackNavigator from './StackNavigation';
import { ThemeContextProvider } from "../Context/ThemeContext";

export default function () {
    return (
        <ThemeContextProvider>
            <StackNavigator />
        </ThemeContextProvider>
    )
}