import React from 'react';
import AppLoading from 'expo-app-loading'
import { useFonts, Inter_400Regular, Inter_600SemiBold, Inter_800ExtraBold } from '@expo-google-fonts/inter';
import AppNavigator from './AppNavigator';

const App = () => {
    const [fontsLoaded] = useFonts({ Inter_400Regular, Inter_600SemiBold, Inter_800ExtraBold });

    return !fontsLoaded ? <AppLoading /> : <AppNavigator />;
}

export default App;