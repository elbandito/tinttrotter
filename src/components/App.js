import React from 'react'
import TodoList from './TodoList'
import FeedList from './FeedList'
import AddTodoItem from '../containers/AddTodoItem'

const App = () => {
    return (
        <div>
            <h1>Tint!</h1>
            <FeedList />
            <AddTodoItem />
            <TodoList />
        </div>
    );
};

export default App;
