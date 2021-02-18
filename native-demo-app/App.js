import React, { useState } from 'react';
import { Keyboard, StyleSheet, TouchableWithoutFeedback, View } from 'react-native';
import AddTodo from './components/AddTodo';
import Header from './components/Header';
import Todos from './components/Todos';

const App = () => {

	const [todos, setTodos] = useState([
		{ id: Math.floor(Math.random() * new Date().getTime() + Math.random() * 1000), label: 'Buy milk' },
		{ id: Math.floor(Math.random() * new Date().getTime() + Math.random() * 1000), label: 'Iron clothes' },
		{ id: Math.floor(Math.random() * new Date().getTime() + Math.random() * 1000), label: 'Wash dishes' },
		{ id: Math.floor(Math.random() * new Date().getTime() + Math.random() * 1000), label: 'Change garbage bags' },
	]);

	const deleteTodo = id => setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id));

	const addTodo = todo => setTodos(prevTodos => [].concat(prevTodos).concat({
		id: Math.floor(Math.random() * new Date().getTime() + Math.random() * 1000),
		label: todo
	}));

	return <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
		<View style={styles.container}>
			<Header />
			<AddTodo onPress={addTodo} />
			<Todos todos={todos} onPress={deleteTodo} />
		</View>
	</TouchableWithoutFeedback>;
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#e9f4aa'
	}
});

export default App;
