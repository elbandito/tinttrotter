import * as types from '../actions/ActionTypes'

const initialState = [
    {
        data: 'init'
    }
];

const feed = (state = initialState, action) => {
    switch (action.type) {
        case types.FETCH_FEED_SUCCESS:
            console.log('success fetching');
            return [
                {
                    data: 'data'
                },
                ...state
            ];
        case types.FETCH_FEED_FAILURE:
            console.log('failure fetching');
            return [
                ...state
            ]

        default:
            return state
    }
};

export default feed;
