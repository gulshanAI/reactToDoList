import React, { Component } from 'react';
import { render } from 'react-dom';

class App extends Component{
  constructor(props){
    super(props)

    this.state = {
      newItem : "",
      list : []
    }
  }
  changeNew = (e) =>{
    this.setState({ newItem : e.target.value})
  }
  addList = (e) =>{
    const newList = {
      id : 1 + Math.random(),
      value : this.state.newItem
    };
    const list = [...this.state.list]
    list.push(newList)
    this.setState({ list : list })
    this.setState({ newItem : ""})
  }
  delete = (id) => {
    const list = [...this.state.list]
    const updateList = list.filter(item=> item.id !== id)
    this.setState({ list : updateList})
  }
  render(){
    return(
      <div>
        <input type="text" onChange={this.changeNew} value={this.state.newItem} /> &nbsp;
        <button onClick={this.addList}>Add</button>
        <br/>
        <br/>
        <ul>
            {this.state.list.map(item=> <li key={item.id}>{item.value} &nbsp;&nbsp;&nbsp;<button onClick={ ()=> this.delete(item.id)}>Delete</button></li>)}
        </ul>
      </div>
    )
  }
}
export default App;