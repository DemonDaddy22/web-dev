import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './screens/Home';
import About from './screens/About';
import ReviewDetails from './screens/ReviewDetails';

const { Navigator, Screen } = createStackNavigator();

const AppNavigator = () => <NavigationContainer initialRouteName='Home'>
    <Navigator headerMode='screen' screenOptions={{ headerStyle: { backgroundColor: '#d91d545f' } }}>
        <Screen name='Home' component={Home} options={{ title: 'Reviews' }} />
        <Screen name='ReviewDetails' component={ReviewDetails} options={{ title: 'Details' }} />
    </Navigator>
</NavigationContainer>;

export default AppNavigator;