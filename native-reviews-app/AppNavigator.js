import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './screens/Home';
import About from './screens/About';
import ReviewDetails from './screens/ReviewDetails';

const { Navigator, Screen } = createStackNavigator();

const AppNavigator = () => <NavigationContainer initialRouteName='Home'>
    <Navigator headerMode='screen'>
        <Screen name='Home' component={Home} />
        <Screen name='Details' component={ReviewDetails} />
    </Navigator>
</NavigationContainer>;

export default AppNavigator;