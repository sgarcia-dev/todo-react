import React from 'react';
import NewTodoInput from './new-todo-input.jsx';
import Todo from './todo.jsx';

class TodoList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			todos: [{
				title: 'Learn ReactJS',
				desc: 'Learn ReactJS at egghead.io and Udemy'
			},
			{
				title: 'Learn AngularJS'
			}]
		};
		this.createTodo = this.createTodo.bind(this);
		this.removeTodo = this.removeTodo.bind(this);
	}

	createTodo(text) {
		this.setState(prevState => {
			const newTodos = prevState.todos.slice(0);
			newTodos.push({title: text});
			return {
				todos: newTodos
			};
		});
	}

	removeTodo(todoTitle) {
		this.setState(prevState => {
			const newTodos = prevState.todos.filter((todo) => {
				return todo.title != todoTitle;
			});
			return {
				todos: newTodos
			};
		});
	}

	render() {
		const Todos = this.state.todos.map((todo, index) => (
			<Todo
				title={todo.title}
				desc={todo.desc}
				key={todo.title}
				removeTodo={this.removeTodo}></Todo>
		));
		return (
			<div>
				<NewTodoInput createTodo={this.createTodo}></NewTodoInput>
				<br/>
				<div>
					{Todos}
				</div>
			</div>
		);
	}
}

export default TodoList;
