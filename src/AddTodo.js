import React from 'react';

export const AddTodo = ({ onChange, addTodoItem, item}) => {
    return (
        <div style={{display: "inline-flex"}}>
          <input className="todo-box" type="text" placeholder="Type your to-do item here..." value={item} onChange={onChange} />
          <button className="add-todo" onClick={e => addTodoItem(e)}>+</button>
        </div>
    );
};