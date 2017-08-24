import { combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import todos from './TodoReducer'
import feed from './FeedReducer'

const TodoReducers = combineReducers({
    todos,
    feed
});

export default TodoReducers;
