import { StatusBar } from 'expo-status-bar';
import React from 'react';

import MainStackNavigator from './src/navigation/MainStackNavigator';
import BottomTabNavigation from './src/navigation/BottomTabNavigation';
import Routes from './src/navigation/Routes';

export default function App() {
  return (
    // <MainStackNavigator />
    // <BottomTabNavigation />
    <Routes />

  );
}
