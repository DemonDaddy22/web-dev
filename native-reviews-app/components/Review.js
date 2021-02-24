import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { globalStyles } from '../styles/GlobalStyles';

export const getRatingsStyles = rating => {
    let ratingStyles = [styles.rating, globalStyles.textExtraBold];
    switch (rating) {
        case 1: return [...ratingStyles, { color: getRatingColor(rating) }];
        case 2: return [...ratingStyles, { color: getRatingColor(rating) }];
        case 3: return [...ratingStyles, { color: getRatingColor(rating) }];
        case 4: return [...ratingStyles, { color: getRatingColor(rating) }];
        case 5: default: return [...ratingStyles, { color: getRatingColor(rating) }];
    }
}

export const getRatingColor = rating => {
    rating = typeof rating === 'string' ? parseInt(rating) : rating;
    switch (rating) {
        case 1: return '#e72231';
        case 2: return '#db6200';
        case 3: return '#f7d52d';
        case 4: return '#5eed5d';
        case 5: default: return '#30b535';
    }
}

const Review = React.memo(({ review, navigation }) => <TouchableOpacity style={[styles.review, globalStyles.padding16]} onPress={() => navigation.navigate('ReviewDetails', review)}>
    <Text style={[styles.title, globalStyles.textBold]}>{review.title}</Text>
    <View style={globalStyles.flexRow}>
        <Text style={getRatingsStyles(review.rating)}>{review.rating}</Text>
        <MaterialIcons name='star' size={16} color={getRatingColor(review.rating)} />
    </View>
</TouchableOpacity>
);

export default Review;

const styles = StyleSheet.create({
    review: {
        borderWidth: 1,
        borderStyle: 'solid',
        borderRadius: 4,
        borderColor: '#d91d544f',
        marginBottom: 16,
        elevation: 2,
        shadowColor: '#fff',
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.2,
        shadowRadius: 1
    },
    title: {
        fontSize: 20,
        color: '#d91d54'
    },
    rating: {
        marginRight: 4,
        fontSize: 16,
        marginVertical: 8
    }
});