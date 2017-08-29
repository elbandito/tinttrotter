import React from 'react'
import FeedContainer from '../containers/FeedContainer'
import { Icon } from 'semantic-ui-react'

const App = () => {
    return (
        <div>
            <div className='title'>
                <h1>{'Tint Globe Trotter: (Suisse|Schweiz|Svizzero) = '}</h1>
                <Icon name='heart' color='red' size='huge' />
            </div>
            <FeedContainer />
        </div>
    );
};

export default App;
