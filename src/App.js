import React from 'react';
import './App.css';
import TodoList from './TodoList';

class App extends React.Component{

  state = {
    item: '',
    todoItems: []
  }

  removeTodoItem = (text, i) => {
    const { todoItems } = this.state

    let updatedTodoList = todoItems.filter(item => item !== text)
    this.setState({
      todoItems: updatedTodoList
    })
  }

  addTodoItem = () => {
    const todoItem = this.state.item
    
    if(todoItem.trim() !== ''){
      this.setState(prevState => ({
        item: '',
        todoItems: [...prevState.todoItems, todoItem],
      }))
    }
  }

  onChange = e => {
    const todoItemText = e.target.value
    this.setState({item: todoItemText})
  }

  render(){
    const { item, todoItems } = this.state

    return (
      <div className="App">
        <h1 style={{fontSize: '48px'}}>To-Do List</h1>
        <div style={{display: "inline-flex"}}>
          <input className="todo-box" type="text" placeholder="Type your to-do item here..." value={item} onChange={this.onChange} />
          <button className="add-todo" onClick={e => this.addTodoItem(e)}>+</button>
        </div>
        <div className="todo-list">
          <TodoList todoItems={todoItems} removeTodoItem={this.removeTodoItem} />
        </div>
      </div>
    );
  }
}

export default App;