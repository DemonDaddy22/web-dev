import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';
import About from './screens/About';
import { Image } from 'react-native';

const { Navigator, Screen } = createStackNavigator();

const AboutNavigator = ({ navigation }) => {

    const openMenu = () => navigation.openDrawer();

    return <NavigationContainer independent>
        <Navigator headerMode='screen' screenOptions={{ headerBackground: () => <Image source={require('./assets/game_bg.png')} style={{ height: '100%' }} /> }}>
            <Screen name='About' component={About} options={{
                title: 'GameZone',
                headerLeft: () => (
                    <MaterialIcons name="menu" size={28} color='black' onPress={openMenu} />
                ),
                headerLeftContainerStyle: {
                    paddingHorizontal: 20,
                }
            }} />
        </Navigator>
    </NavigationContainer>;
}

export default AboutNavigator;