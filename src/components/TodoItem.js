import React, { PropTypes } from 'react'

const TodoItem = ({ value, onClick }) => {

    return (
        <div onClick={onClick}>
            <label>
                <input type="checkbox" />
                {value}
            </label>
        </div>
    );
};

TodoItem.propTypes = {
    value: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
}

export default TodoItem;
