import reducer from './TodoReducer'
import * as actionTypes from '../actions/ActionTypes'

describe('TodoReducer', () => {

    it('should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual([
            { text: 'a' },
            { text: 'b' },
            { text: 'c' }
        ])
    });

    it('should handle ADD_TODO action', () => {
        const newTodoItemAction = {
            type: actionTypes.ADD_TODO,
            data: 'new todo item'
        };

        expect(reducer([], newTodoItemAction)).toEqual([
            { text: 'new todo item' }
        ]);
    });
});
