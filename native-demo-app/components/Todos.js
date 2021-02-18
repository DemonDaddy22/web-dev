import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import Todo from './Todo';

const Todos = React.memo(({ todos, onPress }) => <View style={styles.content}>
    <FlatList
        keyExtractor={item => item.id}
        data={todos}
        renderItem={({ item }) => <Todo todo={item} onPress={onPress} />} />
</View>
);

const styles = StyleSheet.create({
    content: {
        flex: 1,
        paddingVertical: 40
    }
});

export default Todos;