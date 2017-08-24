import fetch from 'isomorphic-fetch'
import * as types from './ActionTypes'

const fetchFeedRequest = () => {
    console.log("feed request")
    return {
        type: types.FETCH_FEED_REQUEST
    }
};

const fetchFeedSuccess = (body) => {
    console.log(body);
    return {
        type: types.FETCH_FEED_SUCCESS,
        body
    }
};

const fetchFeedFailure = (ex) => {
    return {
        type: types.FETCH_FEED_FAILURE,
        ex
    }
};

const fetchFeed = () => {
    console.log("FETCH FEED");
    return dispatch => {
        dispatch(fetchFeedRequest());
        return fetch('https://jsonplaceholder.typicode.com/posts/1')
            .then(res => res.json())
            .then(json => dispatch(fetchFeedSuccess(json.body)))
            .catch(ex => dispatch(fetchFeedFailure(ex)))
    }
};

export default fetchFeed;
