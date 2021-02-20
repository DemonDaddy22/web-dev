import React from 'react';
import { FlatList } from 'react-native';
import { globalStyles } from '../styles/GlobalStyles';
import Review from './Review';

const Reviews = React.memo(({ reviews }) => <FlatList
    style={globalStyles.margin16}
    data={reviews}
    keyExtractor={item => item.id}
    renderItem={({ item }) => <Review review={item} />}
/>);

export default Reviews;