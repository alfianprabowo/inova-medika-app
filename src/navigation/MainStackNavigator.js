import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import RouteConst from '../utils/consts/RouteConst'
import HomePage from '../pages/Home/HomePage'
import LoginPage from '../pages/LoginPage'
import SignUpPage from '../pages/SignUpPage'
import DoctorSchedulePage from '../pages/DoctorSchedule/DoctorSchedulePage'
import ProfilePage from '../pages/Settings/ProfilePage'
import ReservationPage from '../pages/Home/ReservationPage'
import SettingsPage from '../pages/Settings/SettingsPage'

const Stack = createNativeStackNavigator()

export default function MainStackNavigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName={RouteConst.LOGIN}
                screenOptions={{
                    gestureEnabled: true,
                    headerStyle: {
                        backgroundColor: '#F7F7F700'
                    },
                    headerTitleStyle: {
                        fontWeight: 'bold'
                    },
                    headerTintColor: '#FF6200',
                    headerBackTitleVisible: true
                }}
                headerMode='float'>

                <Stack.Screen
                    name={RouteConst.HOME}
                    component={HomePage}
                    options={{
                        headerBackVisible: false,
                    }}
                />

                <Stack.Screen
                    name={RouteConst.LOGIN}
                    component={LoginPage}
                // options={({ route }) => ({
                //     title: route.params.item.name
                // })}
                />

                <Stack.Screen
                    name={RouteConst.SIGNUP}
                    component={SignUpPage}
                // options={{ title: 'Settings' }}
                />

                <Stack.Screen
                    name={RouteConst.DOCTORSCHEDULE}
                    component={DoctorSchedulePage}
                // options={{ title: 'Settings' }}
                />

                <Stack.Screen
                    name={RouteConst.PROFILE}
                    component={ProfilePage}
                // options={{ title: 'Settings' }}
                />

                <Stack.Screen
                    name={RouteConst.RESERVATION}
                    component={ReservationPage}
                // options={{ title: 'Settings' }}
                />


                <Stack.Screen
                    name={RouteConst.SETTINGS}
                    component={SettingsPage}
                // options={{ title: 'Settings' }}
                />

            </Stack.Navigator>
        </NavigationContainer>
    )
}