import React from 'react';
import TodoList from './TodoList';
import AddTodoItem from '../containers/AddTodoItem';
import {Button} from 'semantic-ui-react';

const App = () => {
    return (
        <div>
            <h1>Tint!</h1>
            <div>
                <Button primary>Primary</Button>
                <Button secondary>Secondary</Button>
            </div>
            <AddTodoItem />
            <TodoList />
        </div>
    );
};

export default App;
