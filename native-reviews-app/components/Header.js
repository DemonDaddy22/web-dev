import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const Header = React.memo(() => <View style={styles.header}>
    <Text style={styles.title}>Header</Text>
</View>);

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: '100%'
    }
});