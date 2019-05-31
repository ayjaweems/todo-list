import React from 'react';

export const TodoList = ({ todoItems, removeTodoItem }) => {
    return(
        <ol style={{height: '64px', paddingLeft: '0px'}}>
            {todoItems.map((todoItem, i) => {
                return(
                    <div className="item" key={i}>
                        <div className="todo-result-box">
                            <li key={i} style={{fontSize: '20px'}}>
                                <div className="item-text">
                                <span style={{verticalAlign: 'middle', fontSize: '20px'}}>
                                    {todoItem}
                                </span>
                                </div>
                            </li>
                            <button className="remove-todo" style={{ width: '40px'}} onClick={() => removeTodoItem(todoItem, i)}>x</button>
                        </div>
                    </div>
                )
                })
            }
        </ol>
    )
};

export default TodoList;