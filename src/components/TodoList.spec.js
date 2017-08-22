import React from 'react';
import { mount } from 'enzyme';
import { TodoList } from './TodoList';
import TodoItem from './TodoItem';

const setup = (todos = []) => {
    const props = {
        todos
    };

    const todoList = mount(<TodoList { ...props } />);

    return {
        props,
        todoList
    };
};

describe('<TodoList />', () => {
    it('Renders <TodoList /> with <TodoItems />', () => {
        const todos = [
            {text: 'Take out the trash'},
            {text: 'Get a new job'},
        ];

        const { todoList } = setup(todos);

        expect(todoList.find(TodoItem).length).toBe(2);
        expect(todoList.props().todos).toEqual(todos);
    });
});
