import React from 'react';
import PropTypes from 'prop-types';

/* Use of functional component for presentational purposes */
Todo.propTypes = {
	editTodo: PropTypes.func.isRequired,
	removeTodo: PropTypes.func.isRequired,
	title: PropTypes.string.isRequired
}

export default function Todo(props) {
	function editTodo() {
		props.editTodo(props.title);
	}

	function removeTodo() {
		props.removeTodo(props.title);
	}

	return (
		<div className="panel panel-default">
			<div className="panel-heading">
				<div className="row">
					<div className="col-xs-9 col-sm-10">
						<h3 className="panel-title">{props.title}</h3>
					</div>
					<div className="col-xs-3 col-sm-2 text-right">
						<span className="glyphicon glyphicon-pencil"
							aria-hidden="true"
							onClick={editTodo}></span>
						<span style={{display: 'inline-block',
							width: '15px'}}></span>
						<span className="glyphicon glyphicon-trash"
							aria-hidden="true"
							onClick={removeTodo}></span>
					</div>
				</div>
			</div>
		</div>
	);
}
