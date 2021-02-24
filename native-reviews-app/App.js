import React from 'react';
import AppLoading from 'expo-app-loading';
import { useFonts, Inter_400Regular, Inter_600SemiBold, Inter_800ExtraBold } from '@expo-google-fonts/inter';
import { ModalPortal } from 'react-native-modals';
import Drawer from './Drawer';

const App = () => {
    const [fontsLoaded] = useFonts({ Inter_400Regular, Inter_600SemiBold, Inter_800ExtraBold });

    return !fontsLoaded ? <AppLoading /> : <><Drawer /><ModalPortal /></>;
}

export default App;