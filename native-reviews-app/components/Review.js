import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

const Review = React.memo(({ review }) => <TouchableOpacity>
    <Text>{review.title}</Text>
</TouchableOpacity>);

export default Review;