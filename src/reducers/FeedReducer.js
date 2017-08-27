import * as types from '../actions/ActionTypes'

const feed = (state = [], action) => {

    switch (action.type) {
        case types.FETCH_FEED_SUCCESS:
            return action.data;

        case types.FETCH_FEED_FAILURE:
            return state;

        default:
            return state;
    }
};

export default feed;
