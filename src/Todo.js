import React, { Component } from "react"
import "./Todo.css"
import TodoItems from "./TodoItems"

class TodoApp extends Component {
	constructor(props) {
		super(props) 
		this.state = {
			items: [],
			text: "",
			description:"",
			date:"",
			open: false
		}
		// always do this ".bind" when handleEvent
		this.handleSubmit = this.handleSubmit.bind(this)
		this.handleInputChange = this.handleInputChange.bind(this)
		this.handleDelete = this.handleDelete.bind(this)
		this.handleToggle = this.handleToggle.bind(this)
		this.handleAdvanceButton = this.handleAdvanceButton.bind(this)
		this.handleChangeDetail = this.handleChangeDetail.bind(this)
	}

	// if DidMount then don't forget to WillUnmount
	componentDidMount() {
		this.loadFromLocalStorage()
		// add event listener to save state to localStorage
		// when user leaves/refreshes the page
		window.addEventListener(
			"beforeunload",
			this.saveToLocalStorage.bind(this)
		)
	}

	componentWillUnmount() {
		window.addEventListener(
			"beforeunload",
			this.saveToLocalStorage.bind(this)
		)
		this.saveToLocalStorage()
	}

	loadFromLocalStorage() {
		for (let key in this.state) {
			if (localStorage.hasOwnProperty(key)) {
				let value = localStorage.getItem(key)
				try {
					value = JSON.parse(value)
					this.setState({ [key]: value })
				} catch (e) {
					// handle empty string
					this.setState({ [key]: value })
				}
			}
		}
	}

	saveToLocalStorage() {
		for (const key in this.state) {
			if (this.state.hasOwnProperty(key)) {
				localStorage.setItem(key, JSON.stringify(this.state[key]))
			}
		}
	}

	handleSubmit(e) {
		if (this.state.text !== "") {
			// 
			let text = {
				key: Date.now(), 
				text: this.state.text,
				description: this.state.description,
				date:this.state.date,
				completed: false
			}
			this.setState( (prevState) => {
				// clear input field and add "text" to "items"
				return {
					items: prevState.items.concat(text),
					text: "",
					description: "",
					date: ""
				}
			}
			)
		}
		this.saveToLocalStorage()
		e.preventDefault()
	}

	handleInputChange(e) {
		const target = e.target
		const value = target.value
		const name = target.name
		this.setState({
			[name]: value
		})
	}

	handleChangeDetail(key, text, description, date) {
		this.setState({
			items: this.state.items.map(item => item.key === key ? { ...item, text, description, date } : item)
		})
		alert("save completed")
	}

	handleToggle(key) {
		// find index of 
		let index = this.state.items.findIndex(x => x.key===key)
		let temp = this.state.items.slice()
		temp[index].completed = temp[index].completed ? false : true
		this.setState({
			items: temp
		})
		
	}

	handleAdvanceButton() {
		this.setState({
			open: !this.state.open
		})
		
	}


	handleDelete(key) {
		// return "items" that don't match "key" 
		let filterItems = this.state.items.filter((item) => {
			return (item.key !== key) 
		})
		
		this.setState({
			items: filterItems
		})
	}

	render() {
		return (
			<div className="main">
				<div className="title">
					<h1> Todo-List </h1>
				</div>
				<form onSubmit={this.handleSubmit}>
					<input 
						className="input-head"
						name="text"
						type="text" 
						placeholder="Enter Task Here! or click Advance"
						autoFocus={true}
						value={this.state.text} 
						onChange={this.handleInputChange}
						disabled={this.state.open ? false:true}
					/>
					<button 
						className={"submit" + ((this.state.open ? "" : "-disabled"))} 
						type="submit" 
						disabled={this.state.open ? false : true}
					>
						Add
					</button>
				</form>
				<button className="advance" onClick={this.handleAdvanceButton}> Advance </button>
				<div className={"collapse" + (this.state.open ? "-hide" : "-show")}>
					<form onSubmit={this.handleSubmit}>
						<ul className="form-advance">
							<li>
								<label className="left">Title  : </label>
								<input 
									type="text" 
									name="text"
									value={this.state.text} 
									onChange={this.handleInputChange}
								/>
							</li>
							<li>
								<label className="left">Description : </label>
								<textarea
									name="description"
									value={this.state.description} 
									onChange={this.handleInputChange}
								/>
							</li>
							<li>
								<label className="left">Date/Time : </label>
								<input 
									type="datetime-local" 
									name="date"
									value={this.state.date} 
									onChange={this.handleInputChange}
								/>
							</li>	
							<li>
								<button
									className="submit-advance"
									type="submit"
								>
									Add
								</button>
							</li>
						</ul>
					</form>
				</div>
				<TodoItems 
					todoItems={this.state.items}
					onDelete={this.handleDelete}
					onToggle={this.handleToggle}
					handleChangeDetail={this.handleChangeDetail}
				/>
			</div>
		)
	}
}

export default TodoApp