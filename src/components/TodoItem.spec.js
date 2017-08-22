import React from 'react';
import { shallow } from 'enzyme';
import TodoItem from './TodoItem';

const setup = (value) => {
    const props = {
        onClick: jest.fn(),
        value
    };

    const todoItem = shallow(<TodoItem { ...props }/>);

    return {
        props,
        todoItem
    };
};

describe('<TodoItem />', () => {
    it('Renders <TodoItem />', () => {
        const { todoItem } = setup('Take out the trash');

        expect(todoItem.instance().props.value).toEqual('Take out the trash');
        expect(todoItem.find('label').text()).toEqual('Take out the trash');
    });
});
