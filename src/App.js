import ToDoItem from './components/ToDoItem'
import React, { Component } from 'react'

export default class App extends Component {
    constructor() {
        super();
        this.state = {
            input: '',
            itemArray: [],
            filterBy: "all",
            count: 0
        }
    }

    componentDidMount() {
        let oldStuff = JSON.parse(localStorage.getItem('itemArray'))
        if (oldStuff) {
            this.setState({ itemArray: oldStuff })
        }
    }

    componentDidUpdate() {
        // console.log('App updated!')
        localStorage.setItem('itemArray', JSON.stringify(this.state.itemArray))
    }

    getItem = (e) => {
        this.setState({ input: e.target.value })
        // console.log(this.state.input)
    }

    addToItemArray = () => {
        let { itemArray, input } = this.state;
        if (input.length > 0) {
            this.setState({
                itemArray: [...itemArray, {
                    id: Date.now(),
                    input: input,
                    completed: false,
                    deleted: false,
                }],
                input: '',
                count: this.state.count+1

            })
            // console.log(itemArray)
        }
    }

    changeFilter = (e) => {
        this.setState({ filterBy: e.target.id });
    }

    handleDelete = (id) => {
        let newArray = this.state.itemArray.map((item) => {
            if (item.id === id) {
                item.deleted = true
            }
            this.setState({ count: this.state.count-1 })
            this.setState.count = this.setState.count--
            return item
        })
        // this.currentToDo.deleted = !props.currentToDo.deleted
        // props.currentToDo.completed = false
        this.setState({ itemArray: newArray })
    }

    handleComplete = (id) => {
        let newArray = this.state.itemArray.map((item) => {
            if (item.id === id) {
                item.completed = !item.completed
            }
            return item
        })
        // props.currentToDo.completed = !props.currentToDo.completed
        this.setState({ itemArray: newArray })
    }

    handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            this.addToItemArray()
        }
    }

    render() {
        let tempList = this.state.itemArray.filter(item => !item.deleted);  // all

        if (this.state.filterBy === "completed") {
            tempList = tempList.filter(item => item.completed);
        }
        if (this.state.filterBy === 'active') {
            tempList = tempList.filter(item => !item.completed);
        }
        return (
            <div className="App bg-dark">
                <h1 className="text-center m-4">To-Do List</h1>
                <div className="container">
                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <button className="btn btn-dark border-info"
                                type="button"
                                onClick={this.addToItemArray}
                            >Add to list</button>
                        </div>
                        <input type="text"
                            className="form-control border-info text-white bg-secondary"
                            placeholder="Enter a To-Do item..."
                            aria-label=""
                            aria-describedby="basic-addon1"
                            onChange={this.getItem}
                            value={this.state.input}
                            onKeyDown={this.handleKeyDown}
                        />
                    </div>

                    <ul className="list-group border-info">
                        <li className="list-group-item border-info text-white bg-secondary">
                            <div className="container">
                                <div className="row">
                                    <div className="col-3 text-start border-right">
                                        <span className="border-right">Complete?</span>
                                    </div>
                                    <div className="col-5"></div>
                                    <div className="col-4 text-end">Delete</div>
                                </div>
                            </div>
                        </li>
                        {tempList.map((currentToDo, index) =>
                            <ToDoItem
                                key={index}
                                currentToDo={currentToDo}
                                allToDos={this.state.itemArray}
                                handleDelete={this.handleDelete}
                                handleComplete={this.handleComplete}
                            />)}
                    </ul>

                    <div className="row">
                        <div className="col-12 text-center mt-4">View:</div>
                    </div>

                    <div className="container d-flex justify-content-center">
                        <div className="row">
                            <div className="col-12">
                                <div className="btn-group border-info" role="group" aria-label="Basic example">
                                    <button type="button"
                                        className="btn btn-dark border-info"
                                        id="all"
                                        onClick={this.changeFilter}>All</button>
                                    <button
                                        type="button"
                                        className="btn btn-dark border-info"
                                        id="completed"
                                        onClick={this.changeFilter}>Completed</button>
                                    <button type="button"
                                        className="btn btn-dark border-info"
                                        id="active"
                                        onClick={this.changeFilter}>Active</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row text-center ml-4 mt-1"><p>Total Items: {this.state.count}</p></div>
            </div >
        )
    }
}