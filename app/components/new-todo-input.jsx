import React from 'react';
import PropTypes from 'prop-types';

/* Usage of uncontrolled component with refs because we only need
it to be used once for submission purposes. */
export default class NewTodoInput extends React.Component {
	constructor(props) {
		super(props);
		this.createTodo = props.createTodo;
		this.onKeyPress = this.onKeyPress.bind(this);
	}

	onKeyPress(e) {
		const keyCode = e.keyCode || e.which;
		// on enter key press
		if (keyCode === 13) {
			const todo = this.todoInput.value;
			if (todo) {
				this.createTodo(todo);
				this.todoInput.value = '';
			} else {
				alert('Please enter a valid todo.');
			}
		}
	}

	render() {
		return <input
			name="value"
			type="text"
			className="form-control"
			placeholder="Write your todo here, and press Enter to submit."
			onKeyPress={this.onKeyPress}
			ref={input => this.todoInput = input} />;
	}
}

NewTodoInput.propTypes = {
	createTodo: PropTypes.func.isRequired
}
