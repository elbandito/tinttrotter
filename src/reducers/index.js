import { combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import todos from './TodoReducer';
import feed from "./FeedReducer";

//let reducer = combineReducers(reducers);
//// applyMiddleware supercharges createStore with middleware:
//let store = create(applyMiddleware(thunk));

const TodoReducers = combineReducers({
    todos,
    feed
})

export default TodoReducers;
