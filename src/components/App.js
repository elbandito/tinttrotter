import React from 'react'
import TodoList from './TodoList'
import FeedList from './FeedList'
import AddTodoItem from '../containers/AddTodoItem'
import {Card, Icon} from 'semantic-ui-react'

const App = () => {
    const extra = (
        <a>
            <Icon name='user' />
            16 Friends
        </a>
    );

    return (
        <div>
            <h1>Tint!</h1>
            <AddTodoItem />
            <FeedList />
            <TodoList />
        </div>
    );
};

export default App;
