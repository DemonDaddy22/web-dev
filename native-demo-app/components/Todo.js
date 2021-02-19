import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const Todo = React.memo(({ todo, onPress }) => <TouchableOpacity style={styles.todo} onPress={() => onPress(todo.id)}>
    <Text style={styles.label}>{todo.label}</Text>
    <MaterialIcons name='delete' size={20} color='#143a59cf' />
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
        flexDirection: 'row'
    },
    label: {
        flex: 1,
        color: '#143a59',
        fontSize: 20,
        fontWeight: '500'
    }
});

export default Todo;