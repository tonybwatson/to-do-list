import ToDoItem from './components/ToDoItem'
import React, { Component } from 'react'

export default class App extends Component {
    constructor() {
        super();
        this.state = {
            input: '',
            itemArray: [],
            filterBy: "all"
        }
        //this.changeFilter = this.changeFilter(this.bind)
    }

    getItem = (e) => {
        this.setState({ input: e.target.value })
        // console.log(this.state.input)
    }

    addToItemArray = () => {
        let { itemArray, input } = this.state;
        // itemArray.push(input)

        this.setState({
            itemArray: [...itemArray, {
                id: Date.now(),
                input: input,
                completed: false,
                deleted: false
            }],
            input: '',

        })
        console.log(itemArray)
    }

    changeFilter = (e) => {
        //console.log(e)
        this.setState({filterBy: e.target.id });
    }

    render() {
        let tempList = this.state.itemArray;  // all
        // filter the todo array
        // set 
        if (this.state.filterBy === "completed") { // completed 
            tempList = this.state.itemArray.filter(item => item.completed);
        }
        if (this.state.filterBy === 'active') {
            tempList = this.state.itemArray.filter(item => !item.completed && !item.deleted);
        }
        return (
            <div className="App bg-primary">
                <h1 className="text-center m-4">To-Do List</h1>
                <div className="container">
                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <button className="btn btn-dark"
                                type="button"
                                onClick={this.addToItemArray}
                            >Add to list</button>
                        </div>
                        <input type="text"
                            className="form-control"
                            placeholder=""
                            aria-label=""
                            aria-describedby="basic-addon1"
                            onChange={this.getItem}
                            value={this.state.input}
                        />
                    </div>

                    <ul className="list-group">
                        {tempList.map((currentToDo, index) => <ToDoItem
                            key={index}
                            currentToDo={currentToDo}
                            allToDos={this.state.itemArray}
                        // handleComplete={this.handleComplete}
                        />)}
                    </ul>

                    <div className="container mt-4 d-flex justify-content-center">
                        <div className="footer row">
                            <div className="col-2 mt-1">
                                Show:
                    </div>
                            <div className="col-8">
                                <div className="btn-group" role="group" aria-label="Basic example">
                                    <button type="button" className="btn btn-dark" id="all" onClick={this.changeFilter}>All</button>
                                    <button type="button" className="btn btn-dark" id="completed" onClick={this.changeFilter}>Completed</button>
                                    <button type="button" className="btn btn-dark" id="active" onClick={this.changeFilter}>Active</button>
                                </div>
                            </div>
                            <div className="col-2">
                            </div>
                        </div>
                        <div className="row text-center ml-4 mt-1"><p># of Items: {this.state.itemArray.length}</p></div>
                    </div>
                </div>
            </div >
        )
    }

    // itemDeleted() {
    //     if (this.state.itemArray.deleted) {
    //         console.log(this.state.itemArray)

    //     }
    // }

    // filterDelete() {

    // }

    // filterAll() {

    // }

    componentDidMount() {
        console.log("App loaded!")
        // if (this.itemArray !== 0) {
        //     // console.log("there's some stuff in the array")
        // }
    }

    componentDidUpdate() {
        console.log('App updated!')
        localStorage.setItem('itemArray', JSON.stringify(this.state.itemArray))

    }

    updateFilterByStatus(status) {
        this.setState({

        })
    }
}