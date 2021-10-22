
import React from 'react'

export default function ToDoItem(props) {
    console.log(props)


    return (
        <li className="list-group-item border-info text-white bg-secondary">
            <input className="m-2 col-1 ms-auto"
                type="checkbox"
                aria-label="Checkbox for following text input"
                onChange={() => props.handleComplete(props.currentToDo.id)}
            />{props.currentToDo.input}
            <button className="m-2 float-end btn btn-dark btn-sm" 
                type="button"
                onClick={() => props.handleDelete(props.currentToDo.id)}>x</button>
        </li>
    )
}
