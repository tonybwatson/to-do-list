// import Footer from './components/Footer';
import ToDoItem from './components/ToDoItem'
// import Controller from './components/Controller'

import React, { Component } from 'react'

export default class App extends Component {
    constructor() {
        super();
        this.state = {
            input: '',
            itemArray: []
        }
    }

    getItem = (e) => {
        this.setState({ input: e.target.value })
        console.log(this.state.input)
    }

    addToItemArray = () => {
        let { itemArray, input } = this.state;
        // itemArray.push(input)
        console.log(itemArray)
      
        this.setState({
            itemArray: [...itemArray, input],
            input: ''
        })
    }

    render() {
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
                        {this.state.itemArray.map((currentToDo, index) => <ToDoItem key={index} currentToDo={currentToDo}/>)}
                    </ul>

                    <div className="container mt-4 d-flex justify-content-center">
                        <div className="footer row">
                            <div className="col-2 mt-1">
                                Show:
                    </div>
                            <div className="col-8">
                                <div className="btn-group" role="group" aria-label="Basic example">
                                    <button type="button" className="btn btn-dark">All</button>
                                    <button type="button" className="btn btn-dark">Completed</button>
                                    <button type="button" className="btn btn-dark">Active</button>
                                </div>
                            </div>
                            <div className="col-2">
                            </div>
                        </div>
                        <div className="row text-center p-4"><p># of Items:</p></div>
                    </div>
                </div>
            </div >
        )
    }

    componentDidMount() {
        console.log("App loaded!")
    }

    componentDidUpdate() {
        console.log('App updated!')
          localStorage.setItem('itemArray', JSON.stringify(this.state.itemArray))
        // this.render()
    }


    //     filterByComplete() {

    //     }

    //     filterByActive() {

    //     }

    //     filterShowAll() {

    //     }


}