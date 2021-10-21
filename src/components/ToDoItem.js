
import React from 'react'

export default function ToDoItem(props) {
    console.log(props)
    function handleDelete() {
        props.currentToDo.deleted = true
        localStorage.setItem('itemArray', JSON.stringify(props.allToDos))
        // itemDeleted()
    }

    function handleComplete() {
        props.currentToDo.completed = true
        localStorage.setItem('itemArray', JSON.stringify(props.allToDos))
    }

    // function itemDeleted() {
    //     if (this.currentToDo.deleted) {
    //         console.log(this.state.currentToDo.id)

    //     }}

    return (
        <li className="list-group-item"><input className="m-2"
            type="checkbox"
            aria-label="Checkbox for following text input"
            // text={props.toDoListItem} 
            // key={this.index} 
            // active="true"
            // deleted="false"
            onChange={handleComplete}
        />{props.currentToDo.input}
            <button className="m-2 float-end btn btn-dark btn-sm" type="button" onClick={handleDelete}>x</button>
        </li>
    )
}





// import React, { Component } from 'react'

// export default class ToDoItem extends Component {
//     render() {
//         return (
//             <li className="list-group-item"><input className="m-2" 
//                 type="checkbox" 
//                 aria-label="Checkbox for following text input" 
//                 // text={props.toDoListItem} 
//                 key={this.index} 
//                 active="true"
//                 hidden={false}
//                 />
//                 {this.currentToDo}
//                 </li>
//         )
//     }
// }
