import React from 'react';
import { StyleSheet } from 'react-native';
import AppLoading from 'expo-app-loading'
import { useFonts, Inter_400Regular, Inter_600SemiBold, Inter_800ExtraBold } from '@expo-google-fonts/inter';
import Home from './screens/Home';

const App = () => {
    const [fontsLoaded] = useFonts({ Inter_400Regular, Inter_600SemiBold, Inter_800ExtraBold });

    return !fontsLoaded ? <AppLoading /> : <Home />;
}

export const globalStyles = StyleSheet.create({
    textRegular: {
        fontFamily: 'Inter_400Regular'
    },
    textBold: {
        fontFamily: 'Inter_600SemiBold'
    },
    textExtraBold: {
        fontFamily: 'Inter_800ExtraBold'
    }
});

export default App;