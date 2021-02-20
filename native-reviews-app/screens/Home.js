import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { globalStyles } from '../App';

const Home = React.memo(() => <View style={styles.container}>
    <Text style={{ ...globalStyles.textBold }}>Home Screen</Text>
</View>);

const styles = StyleSheet.create({
    container: {
        padding: 40
    }
});

export default Home;