import fetch from 'isomorphic-fetch'
import * as types from './ActionTypes'

const API_KEY = '27ec48c326a4acf16f392abe8733eada7492c7b3';

const fetchFeedRequest = () => {
    console.log("feed request")
    return {
        type: types.FETCH_FEED_REQUEST
    }
};

const fetchFeedSuccess = (data) => {
    console.log(data);
    return {
        type: types.FETCH_FEED_SUCCESS,
        data
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
        return fetch(`https://api.tintup.com/v1/feed/leysin?api_token=${API_KEY}`)
            .then(res => res.json())
            .then(response => {
                //console.log("ACTION");
                //console.log(response);
                dispatch(fetchFeedSuccess(response.data))
            })
            .catch(ex => dispatch(fetchFeedFailure(ex)))
    }
};

export default fetchFeed;
