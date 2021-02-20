import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import Reviews from '../components/Reviews';

const Home = React.memo(({ navigation }) => {

    const getRandomID = (offset = 1000) => Math.floor(Math.random() * new Date().getTime() + Math.random() * offset);

    const [reviews, setReviews] = useState([
        { title: 'Zelda, Breath of Fresh Air', rating: 5, body: 'club spirit ocean now similar dull short old eventually nails ask except window broke there supply biggest driver garage present butter remain property poem', id: getRandomID() },
        { title: 'Gotta Catch Them All (again)', rating: 4, body: 'walk that rising mark capital fresh flag cake small couple one science also dropped grass take foot sale factory exciting mill task pig add', id: getRandomID() },
        { title: 'Not So "Final" Fantasy', rating: 3, body: 'important luck bread offer among electricity use lose began nearly company pot past accident property with gain kill tea history government real snake needed', id: getRandomID() },
    ]);

    return <View style={styles.container}>
        <Reviews reviews={reviews} />
    </View>
});

const styles = StyleSheet.create({
    container: {
        padding: 40
    }
});

export default Home;