import React from 'react'
import { mount } from 'enzyme'
import { FeedList } from './FeedList'

const setup = (feed = []) => {
    const props = {
        fetchFeed: jest.fn(),
        feed
    };

    const feedList = mount(<FeedList { ...props } />);

    return {
        props,
        feedList
    };
};

describe('<FeedList />', () => {
    it('Renders <FeedList />', () => {
        let feedData = [
            {image: 'image.jpg', url: 'url', title: 'title'}
        ];
        const { feedList } = setup(feedData);

        expect(feedList.instance().props.feed).toEqual(feedData);
    });
});
