import React, { Component } from "react"

class Item extends Component {
	componentDidMount() {
		const { text, description, date } = this.props.item

		this.inputText.value = text
		this.inputDescription.value = description
		this.inputDate.value = date
	}

	render() {
		const { item, todoClass, handleToggle, handleDelete, handleChangeDetail } = this.props

		return (
			<li
				key={item.key}
				className={todoClass}
			>
				<div className="content" >
					<ul className="content-ul">
						<li>
							<input 
								className="check-box"
								type="checkbox" 
								checked={item.completed} 
								onClick={() => handleToggle(item.key)} 
                                
							/>
							<input 
								className="edit-title"
								type="text" 
								ref={node => this.inputText = node} 
								disabled={item.completed ? true : false}
							/>
						</li>
						<li>
							<textarea 
								className="edit-textarea" 
								type="textarea" ref={node => this.inputDescription = node} 
								disabled={item.completed ? true : false}
							/>
						</li>
						<li>
							<input 
								className="edit-date" 
								type="datetime-local" 
								ref={node => this.inputDate = node} 
								disabled={item.completed ? true : false}
							/>
						</li>
						<li>
							<button 
								className="btn-save" 
								onClick={() => handleChangeDetail(item.key, this.inputText.value, this.inputDescription.value, this.inputDate.value)} 
								disabled={item.completed ? true : false}
							>
                            Save 
							</button>
							<button 
								className="btn-delete" 
								onClick={() => handleDelete(item.key)}>

                            Delete
							</button>
						</li>
					</ul>
				</div>
			</li>
		)
	}

}

export default Item