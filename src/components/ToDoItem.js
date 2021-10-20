
import React from 'react'

export default function ToDoItem(props) {
    console.log(props)
    return (
            <li className="list-group-item"><input className="m-2" 
                type="checkbox" 
                aria-label="Checkbox for following text input" 
                // text={props.toDoListItem} 
                // key={this.Date()} 
                active="true" 
                hidden={false}
                />{props.currentToDo}</li>
    )
}
