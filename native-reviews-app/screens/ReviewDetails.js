import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const ReviewDetails = React.memo(() => <View style={styles.container}>
    <Text>ReviewDetails Screen</Text>
</View>);

const styles = StyleSheet.create({
    container: {
        padding: 32
    }
});

export default ReviewDetails;