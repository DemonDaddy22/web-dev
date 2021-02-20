import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './AppNavigator';
import AboutNavigator from './AboutNavigator';

const { Navigator, Screen } = createDrawerNavigator();

const DrawerNavigator = () => <NavigationContainer>
    <Navigator initialRouteName='Home'>
        <Screen name='Home' component={AppNavigator} />
        <Screen name='About' component={AboutNavigator} />
    </Navigator>
</NavigationContainer>

export default DrawerNavigator;