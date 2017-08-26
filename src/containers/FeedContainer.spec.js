import React from 'react'
import { mount } from 'enzyme'
import { FeedContainer } from './FeedContainer'

const setup = (feed = []) => {
    const props = {
        fetchFeed: jest.fn(),
        feed
    };

    const feedContainer = mount(<FeedContainer { ...props } />);

    return {
        props,
        feedContainer
    };
};

describe('<FeedContainer />', () => {
    it('Renders <FeedContainer />', () => {
        let feedData = [
            {
                image: 'image.jpg',
                url: 'url',
                title: 'title',
                author: '{"name":"switzerland.basel","link":"http://instagram.com/switzerland.basel","picture":"https://res-3.cloudinary.com/tint/image/instagram_name/c_fill,h_75,w_75/switzerland.basel","username":"switzerland.basel","followers":39969}'
            }
        ];
        const { feedContainer } = setup(feedData);

        expect(feedContainer.instance().props.feed).toEqual(feedData);
    });
});
