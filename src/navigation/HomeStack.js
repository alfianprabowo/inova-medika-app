import { createNativeStackNavigator } from "@react-navigation/native-stack";
import RouteConst from "../utils/consts/RouteConst";
import HomePage from "../pages/Home/HomePage";
import ReservationPage from "../pages/Home/ReservationPage";
import ReservationHistoryPage from "../pages/History/ReservationHistoryPage";
import TextConst from "../utils/consts/TextConst";

export default function HomeStack() {
    return (
        <Stack.Navigator
            initialRouteName={RouteConst.HOME}
            screenOptions={{
                // headerShown: false,
            }}
        >
            <Stack.Screen
                name={RouteConst.HOMEPAGE}
                component={HomePage}
                options={{
                    headerShown: false,
                    headerBackTitle: "back"
                    // headerBackVisible: false,
                }}
            />

            <Stack.Screen
                name={RouteConst.RESERVATION}
                component={ReservationPage}
                options={{
                    headerBackVisible: true,
                    title: TextConst.RESERVATION
                }}
            />

        </Stack.Navigator>
    )
};

const Stack = createNativeStackNavigator();
