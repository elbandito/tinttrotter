import React from 'react'
import FeedContainer from '../containers/FeedContainer'

const App = () => {
    return (
        <div>
            <div className='title'>
                <h1>{'Tint Globe Trotter: (Suisse|Schweiz|Svizzero)'}</h1>
            </div>
            <FeedContainer />
        </div>
    );
};

export default App;
