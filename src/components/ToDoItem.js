
import React from 'react'

export default function ToDoItem(props) {
    console.log(props.currentToDo.completed)


    return (
        <li className="list-group-item border-info text-white bg-secondary">
            <input className="m-2 col-1 ms-auto"
                type="checkbox"
                aria-label="Checkbox for following text input"
                onChange={() => props.handleComplete(props.currentToDo.id)}
            />{props.currentToDo.completed
                    ? (<strike>{props.currentToDo.input}</strike>)
                    : (props.currentToDo.input)
                }
            <button className="m-2 float-end btn btn-dark btn-sm" 
                type="button"
                onClick={() => props.handleDelete(props.currentToDo.id)}>x</button>
        </li>
    )
}
