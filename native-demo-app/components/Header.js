import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const Header = React.memo(() => <View style={styles.header}>
    <Text style={styles.text}>ToDo List</Text>
</View>);

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#143a59',
        paddingTop: 48,
        paddingBottom: 24,
    },
    text: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 32,
        textAlign: 'center'
    }
});

export default Header;