import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions/TodoActions';

const AddTodoItem = ({ dispatch }) => {

    let input;
    const handleOnSubmit = (event) => {
        event.preventDefault();

        if (!input.value.trim()) {
            return;
        }

        dispatch(addTodo(input.value));
        input.value = '';
    }

    return (
        <div>
            <form onSubmit={handleOnSubmit}>
                <input type="text" ref={(node) => {input = node}}/>
                <button type="submit">create todo</button>
            </form>
        </div>
    );
};

export { AddTodoItem };
export default connect()(AddTodoItem);
