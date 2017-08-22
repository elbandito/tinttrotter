import React from 'react'
import TodoList from './TodoList';
import AddTodoItem from '../containers/AddTodoItem';

const App = () => {
    return (
        <div>
            <h1>Tint!</h1>
            <AddTodoItem />
            <TodoList />
        </div>
    );
};

export default App;
