import { combineReducers } from 'redux';
import todos from './TodoReducer';

const TodoReducers = combineReducers({
    todos
})

export default TodoReducers;
