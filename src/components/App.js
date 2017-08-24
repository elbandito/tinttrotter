import React from 'react';
import TodoList from './TodoList';
import AddTodoItem from '../containers/AddTodoItem';
import {Card, Icon} from 'semantic-ui-react';

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
            <div>
                <Card
                    image='/assets/images/avatar/large/elliot.jpg'
                    header='Elliot Baker'
                    meta='Friend'
                    description='Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.'
                    extra={extra}
                />
            </div>
            <AddTodoItem />
            <TodoList />
        </div>
    );
};

export default App;
