import { NavigationContainer } from "@react-navigation/native";
import { useContext } from "react";
import AuthStack from "./AuthStack";
import HomeStack from "./HomeStack";
import { AuthContext } from "../auth/AuthProvider";
import BottomTabNavigation from "./BottomTabNavigation";

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
