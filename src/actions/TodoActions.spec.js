import * as actions from './TodoActions';
import * as actionTypes from './ActionTypes';

describe('TodoActions', () => {

    it('generates ADD_TODO action', () => {
       const todoDoAction = actions.addTodo('Take out the trash');

       expect(todoDoAction).toEqual({
           type: actionTypes.ADD_TODO,
           data: 'Take out the trash'
       });
    });
});
