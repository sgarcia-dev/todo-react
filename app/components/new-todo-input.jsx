import React from 'react';

class NewTodoInput extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			value: ''
		};
		this.submitNewTodo = props.createTodo;
		this.handleKeyPress = this.handleKeyPress.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}

	handleKeyPress(e) {
		const keyCode = e.keyCode || e.which;
		if (keyCode === 13) {
			if(this.state.value) {
				this.submitNewTodo(this.state.value);
				this.setState({
					value:''
				});
			} else {
				alert('Please insert a valid todo.');
			}
		}
	}

	handleChange(e) {
		const propName = e.target.name,
			value = e.target.value;
		this.setState({
			[propName]: value
		});
	}

	render() {
		return <input
			name="value"
			type="text"
			className="form-control"
			placeholder="Write your todo here..."
			onKeyPress={this.handleKeyPress}
			onChange={this.handleChange}
			value={this.state.value}/>;
	}
}

export default NewTodoInput;
