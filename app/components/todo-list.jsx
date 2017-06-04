import React from 'react';
import PropTypes from 'prop-types';

import NewTodoInput from './new-todo-input.jsx';
import Todo from './todo.jsx';

class TodoList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			todos: props.todoList || []
		};
		this.createTodo = this.createTodo.bind(this);
		this.editTodo = this.editTodo.bind(this);
		this.removeTodo = this.removeTodo.bind(this);
	}

	createTodo(newTodoText) {
		this.setState(prevState => {
			return {
				todos: prevState.todos.concat(newTodoText)
			};
		});
	}

	editTodo(oldTodo) {
		const newTodo = prompt('Todo:', oldTodo);
		if (newTodo === oldTodo)
			return;
		this.setState(prevState => {
			const newTodos = prevState.todos.slice();
			const todoIndex = newTodos.indexOf(oldTodo);
			newTodos[todoIndex] = newTodo;
			return {
				todos: newTodos
			}
		});
	}

	removeTodo(todo) {
		this.setState(prevState => {
			const newTodos = prevState.todos.slice();
			const todoIndex = newTodos.indexOf(todo);
			newTodos.splice(todoIndex, 1);
			return {
				todos: newTodos
			};
		});
	}

	render() {
		return (
			<div>
				<NewTodoInput createTodo={this.createTodo}></NewTodoInput>
				<br/>
				<div>
					{ this.state.todos.map(todo => <Todo
						title={todo}
						removeTodo={this.removeTodo}
						editTodo={this.editTodo}
						key={todo}></Todo>)}
				</div>
			</div>
		);
	}
}

TodoList.propTypes = {
	todoList: PropTypes.array
};

export default TodoList;
