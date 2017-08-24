const initialState = [{text: 'a'}, {text: 'b'}, {text: 'c'}];

const todo = (state, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return {
                text: action.data
            }
        default:
            return state
    }
};

const TodoReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [
                ...state,
                todo(undefined, action)
            ]
        default:
            return state
    }
};

export default TodoReducer;
