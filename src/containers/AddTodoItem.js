import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { addTodo } from '../actions/TodoActions'
import fetchFeed from '../actions/FeedActions'

const AddTodoItem = ({ dispatch }) => {

    let input;
    const handleOnSubmit = (event) => {
        event.preventDefault();

        if (!input.value.trim()) {
            return;
        }

        dispatch(addTodo(input.value));
        dispatch(fetchFeed());
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
