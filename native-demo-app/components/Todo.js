import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

const Todo = React.memo(({ todo, onPress }) => <TouchableOpacity style={styles.todo} onPress={() => onPress(todo.id)}>
    <Text style={styles.label}>{todo.label}</Text>
</TouchableOpacity>);

const styles = StyleSheet.create({
    todo: {
        borderRadius: 4,
        borderColor: '#143a593f',
        borderStyle: 'dashed',
        borderWidth: 1,
        paddingVertical: 16,
        paddingHorizontal: 20,
        marginTop: 16,
        marginHorizontal: 24,
    },
    label: {
        color: '#143a59',
        fontSize: 20,
        fontWeight: '500'
    }
});

export default Todo;