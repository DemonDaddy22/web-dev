import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import About from './screens/About';

const { Navigator, Screen } = createStackNavigator();

const AboutNavigator = () => <NavigationContainer independent>
    <Navigator headerMode='screen' screenOptions={{ headerStyle: { backgroundColor: '#d91d545f' } }}>
        <Screen name='About' component={About} options={{ title: 'About GameZone' }} />
    </Navigator>
</NavigationContainer>;

export default AboutNavigator;