import React from 'react';
import ReactDOM from 'react-dom';

import TodoList from './components/todo-list.jsx';

const todoList = [
	'Learn React',
	'Learn Redux'
];

ReactDOM.render(
	<TodoList todoList={todoList}></TodoList>,
	document.getElementById('react-app'));
