import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useEffect, useState } from "react";
import RouteConst from "../utils/consts/RouteConst";
import SplashScreen from "../pages/SplashScreen";
import LoginPage from "../pages/LoginPage";
import SignUpPage from "../pages/SignUpPage";

export default function AuthStack() {
    const [isFirstLaunch, setIsFirstLaunch] = useState(null);
    let route;

    useEffect(() => {

    }, []);

    // if (isFirstLaunch === null) {
    //     return null;
    // } else if (isFirstLaunch === true) {
    //     route = RouteConst.SPLASH;
    // } else {
    //     route = RouteConst.LOGIN;
    // }

    return (
        <Stack.Navigator
            initialRouteName={RouteConst.LOGIN}
            screenOptions={{
                headerShown: false
            }}
        >

            <Stack.Screen name={RouteConst.SPLASH} component={SplashScreen} />
            <Stack.Screen name={RouteConst.LOGIN} component={LoginPage} />
            <Stack.Screen name={RouteConst.SIGNUP} component={SignUpPage} />

        </Stack.Navigator>
    )
};

const Stack = createNativeStackNavigator();
