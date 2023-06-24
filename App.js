import { StatusBar } from 'expo-status-bar';
import React from 'react';

import MainStackNavigator from './src/navigation/MainStackNavigator';

export default function App() {
  return (
    // <View style={styles.container}>
    //   <Text>Open up App.js to start working on your app!</Text>
    //   <StatusBar style="auto" />
    // </View>
    <MainStackNavigator />
  );
}
