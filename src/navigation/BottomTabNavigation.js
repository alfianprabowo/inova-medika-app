import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import RouteConst from '../utils/consts/RouteConst';
import HomePage from '../pages/Home/HomePage';
import SettingsPage from '../pages/Settings/SettingsPage';
import DoctorSchedulePage from '../pages/DoctorSchedule/DoctorSchedulePage';
import HistoryPage from '../pages/History/HistoryPage';
import Ionicons from 'react-native-vector-icons/Ionicons';
import TextConst from '../utils/consts/TextConst';
import HomeStack from './HomeStack';

const Tab = createBottomTabNavigator();

const HomeNav = () => {
    return (
        <HomeStack />
    )
}

export default function BottomTabNavigation() {
    return (
        <Tab.Navigator
            initialRouteName={RouteConst.HOME}
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    if (route.name === RouteConst.HOME) {
                        iconName = focused
                            ? 'home'
                            : 'home-outline';
                    } else if (route.name === RouteConst.DOCTORSCHEDULE) {
                        iconName = focused
                            ? 'calendar'
                            : 'calendar-outline';
                    } else if (route.name === RouteConst.HISTORY) {
                        iconName = focused
                            ? 'medical'
                            : 'medical-outline';
                    } else if (route.name === RouteConst.SETTINGS) {
                        iconName = focused
                            ? 'settings'
                            : 'settings-outline';
                    }

                    return <Ionicons name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: '#04CC89',
                tabBarInactiveTintColor: 'gray',
                headerShown: false,
            })}>

            <Tab.Screen name={RouteConst.HOME} component={HomeNav} options={{ title: TextConst.HOME }} />
            <Tab.Screen name={RouteConst.DOCTORSCHEDULE} component={DoctorSchedulePage} options={{ title: TextConst.DOCTOR_SCHEDULE }} />
            <Tab.Screen name={RouteConst.HISTORY} component={HistoryPage} options={{ title: TextConst.HISTORY }} />
            <Tab.Screen name={RouteConst.SETTINGS} component={SettingsPage} options={{ title: TextConst.SETTINGS }} />

        </Tab.Navigator>
    );
}