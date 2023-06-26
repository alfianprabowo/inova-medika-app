import { NavigationContainer } from "@react-navigation/native";
import { useContext } from "react";
import AuthStack from "./AuthStack";
import HomeStack from "./HomeStack";
import { AuthContext } from "../auth/AuthProvider";
import BottomTabNavigation from "./BottomTabNavigation";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function Routes() {
    const { user, setUser } = useContext(AuthContext);


    const isLoggedIn = true;

    return (
        <NavigationContainer>
            {
                isLoggedIn ? (
                    // Logged in Pages
                    <BottomTabNavigation />
                ) : (
                    // Auth Pages
                    <AuthStack />
                )
            }
        </NavigationContainer>
    )
};
