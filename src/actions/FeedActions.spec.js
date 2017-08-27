import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import fetchFeed from '../actions/FeedActions'
import * as actionTypes from './ActionTypes';
import nock from 'nock'

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Fetch Async Actions', () => {
    afterEach(() => {
        nock.cleanAll()
    })

    it('creates FETCH_FEED_SUCCESS when fetching feed has finished', () => {
        nock('https://api.tintup.com', {
            filteringScope: function (scope) {
                return true;
            }
        })
            .filteringPath(function (path) {
                return "/";
            })
            .get('/')
            .reply(200, {data: [{url: 'url'}]});

        const expectedActions = [
            { type: actionTypes.FETCH_FEED_REQUEST },
            { type: actionTypes.FETCH_FEED_SUCCESS, data: [{url: 'url'}] }
        ];

        const store = mockStore({ todos: [] })

        return store.dispatch(fetchFeed()).then(() => {
            // return of async actions
            expect(store.getActions()).toEqual(expectedActions)
        })
    })
})