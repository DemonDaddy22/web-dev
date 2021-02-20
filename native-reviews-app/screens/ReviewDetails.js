import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { globalStyles } from '../styles/GlobalStyles';
import { getRatingColor, getRatingsStyles } from '../components/Review';

const ReviewDetails = React.memo(({ route: { params: { title, rating, body } } }) => <View style={[globalStyles.container, globalStyles.center]}>
    <View>
        <Text style={[styles.title, globalStyles.textBold]}>{title}</Text>
        <View style={globalStyles.flexRow}>
            <Text style={getRatingsStyles(rating)}>{rating}</Text>
            <MaterialIcons name='star' size={20} color={getRatingColor(rating)} />
        </View>
        <Text style={[styles.body]}>{body}</Text>
    </View>
</View>);

const styles = StyleSheet.create({
    review: {
        borderWidth: 1,
        borderStyle: 'solid',
        borderRadius: 4,
        borderColor: '#d91d544f',
        marginBottom: 16
    },
    title: {
        fontSize: 28,
        color: '#d91d54'
    },
    rating: {
        marginRight: 4,
        fontSize: 20,
        marginVertical: 8
    },
    body: {
        color: '#f7f7f7',
        fontSize: 24
    }
});

export default ReviewDetails;