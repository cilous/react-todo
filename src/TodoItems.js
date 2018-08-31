import React, { Component } from "react"
import Item from "./Item"

class TodoItems extends Component {
	constructor(props) {
		super(props)
		this.createTasks = this.createTasks.bind(this)
	}

	createTasks(item) {
		const todoClass = item.completed ? "done" : "undone"

		return ( 
			<Item 
				key={item.key} 
				todoClass={todoClass} 
				item={item} 
				handleToggle={this.props.onToggle} 
				handleDelete={this.props.onDelete} 
				handleChangeDetail={this.props.handleChangeDetail} 
			/>
		)
	}

	render() {
		let todoEntries = this.props.todoItems
		let listItems = todoEntries.map(this.createTasks)
		let totalRemain = 0
		for (const i in todoEntries) {
			if (todoEntries.hasOwnProperty(i)) {
				totalRemain = todoEntries[i].completed ? totalRemain : totalRemain + 1
			}
		}

		if (listItems.length) {
			return (
				<div>
					<div className="todo-item">
						<ul className="theList">{listItems}</ul>
					</div>
					<div className="todo-footer">
						<span>{totalRemain} items left</span>
					</div>
				</div>

			)
		} else {
			return (
				<div></div>
			)
		}

	}

}

export default TodoItems