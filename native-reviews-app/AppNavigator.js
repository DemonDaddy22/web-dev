import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { MaterialIcons } from '@expo/vector-icons';
import Home from './screens/Home';
import ReviewDetails from './screens/ReviewDetails';
import { Image } from 'react-native';

const { Navigator, Screen } = createStackNavigator();

const AppNavigator = ({ navigation }) => {

    const openMenu = () => navigation.openDrawer();

    return <NavigationContainer initialRouteName='Home' independent>
        <Navigator headerMode='screen' screenOptions={{ headerBackground: () => <Image source={require('./assets/game_bg.png')} style={{ height: '100%' }} /> }}>
            <Screen name='Home' component={Home} options={{
                title: 'Reviews 🎮',
                headerLeft: () => (
                    <MaterialIcons name='menu' size={28} color='black' onPress={openMenu} />
                ),
                headerLeftContainerStyle: {
                    paddingHorizontal: 20,
                }
            }} />
            <Screen name='ReviewDetails' component={ReviewDetails} options={{
                title: 'Details'
            }} />
        </Navigator>
    </NavigationContainer>;
}

export default AppNavigator;