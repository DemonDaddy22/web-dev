import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Home = React.memo(() => <View style={styles.container}>
    <Text>Home Screen</Text>
</View>);

const styles = StyleSheet.create({
    container: {
        padding: 32
    }
});

export default Home;