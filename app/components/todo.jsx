import React from 'react';

class Todo extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			title: props.title || null,
			desc: props.desc || null,
		};
		this.handleTodoRemoval = props.removeTodo;
		this.editTodo = this.editTodo.bind(this);
		this.deleteTodo = this.deleteTodo.bind(this);
	}

	editTodo() {
		const newTitle = prompt('Title:', this.state.title || '');
		const newDesc = prompt('Description:', this.state.desc || '');

		this.setState({
			title: newTitle,
			desc: newDesc
		});
	}

	deleteTodo(e) {
		this.handleTodoRemoval(this.state.title);
	}

	render() {
		return (
			<div className="panel panel-default">
				<div className="panel-heading">
					<div className="row">
						<div className="col-xs-10">
							<h3 className="panel-title">{this.state.title}</h3>
						</div>
						<div className="col-xs-2 text-right">
							<span className="glyphicon glyphicon-pencil"
								aria-hidden="true"
								onClick={this.editTodo}></span>
							<span style={{display: 'inline-block',
								width: '15px'}}></span>
							<span className="glyphicon glyphicon-trash"
								aria-hidden="true"
								onClick={this.deleteTodo}></span>
						</div>
					</div>
				</div>
				{this.state.desc && (
					<div className="panel-body">
						{this.state.desc}
					</div>
				)}
			</div>
		);
	}
}

export default Todo;
