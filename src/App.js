import React, { Component } from "react"

class App extends Component {

  constructor(props) {
    super(props)
  }

  handleItem(event) {

  }

  createList() {

  }

  render() {
    return (
      <div className="todo-container">
        <input className="todo-input" placeholder="New Item"/>
        <button className="todo-submit">Submit</button>
        <ul className="todo-item-list">
          <li>First item</li>
        </ul>
      </div>
    )
  }
}

export default App;
