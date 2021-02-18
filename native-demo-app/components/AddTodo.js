import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Button, Alert } from 'react-native';

const AddTodo = React.memo(({ onPress }) => {

    const [todo, setTodo] = useState('');

    const handlePress = () => {
        if (todo.length < 4) {
            Alert.alert('Oops!', 'ToDo needs to be greater than 3 characters', [
                { text: 'Okay' }
            ]);
        } else {
            onPress(todo);
            setTodo('');
        }
    }

    return <View style={styles.form}>
        <TextInput style={styles.input} placeholder='Add ToDo' value={todo} onChangeText={val => setTodo(val)} />
        <Button title='Add' color='#143a59' onPress={handlePress} />
    </View>
});

const styles = StyleSheet.create({
    form: {
        marginTop: 40,
        marginHorizontal: 20
    },
    input: {
        borderWidth: 1,
        borderColor: '#143a597f',
        borderStyle: 'solid',
        borderRadius: 4,
        padding: 12,
        color: '#143a59',
        fontSize: 20
    }
});

export default AddTodo;