import reducer from './FeedReducer'
import * as actionTypes from '../actions/ActionTypes'

describe('FeedReducer', () => {

    it('should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual([])
    });

    it('should handle FETCH_FEED_SUCCESS action', () => {
        const fetchFeedSuccessAction = {
            type: actionTypes.FETCH_FEED_SUCCESS,
            data: [{url: 'https://tintup.com'}]
        };

        expect(reducer([], fetchFeedSuccessAction)).toEqual([
            { url: 'https://tintup.com' }
        ]);
    });

    it('should handle FETCH_FEED_FAILURE action', () => {
        const fetchFeedFailureAction = {
            type: actionTypes.FETCH_FEED_FAILURE,
            ex: 'something bad happened!'
        };

        expect(reducer([], fetchFeedFailureAction)).toEqual([]);
    })
});
