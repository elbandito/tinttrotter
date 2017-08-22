import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import TodoItem from './TodoItem';

// class TodoList extends React.Component {

const TodoList = ({ todos }) => (
    <div>
        {
            todos.map((todo, index) =>
                <TodoItem value={todo.text} onClick={() => console.log('dkjdkfjd')} key={index}/>)
        }
    </div>
);

TodoList.propTypes = {
    todos: PropTypes.arrayOf(PropTypes.shape({
        text: PropTypes.string.isRequired
    }).isRequired).isRequired
};

const mapStateToProps = (state) => ({
    todos: state.todos
});

export { TodoList };
export default connect(mapStateToProps)(TodoList);
