import { combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import feed from './FeedReducer'

const Reducers = combineReducers({
    feed
});

export default Reducers;
