import React from 'react'
import PropTypes from 'prop-types'
import { Checkbox, Label } from 'semantic-ui-react'

const TodoItem = ({ value, onClick }) => {

    return (
        <div onClick={onClick}>
            <Checkbox label={<label>{value}</label>}/>
        </div>
    );
};

TodoItem.propTypes = {
    value: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
};

export default TodoItem;
