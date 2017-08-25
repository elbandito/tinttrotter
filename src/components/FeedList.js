import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {Card, Icon, Image} from 'semantic-ui-react'
import fetchFeed from '../actions/FeedActions'

class FeedList extends React.Component {

    componentDidMount() {
        this.props.fetchFeed();
    }

    render() {
        const image = (src, url) => (
            <Image src={src} href={url}></Image>
        );

        const extra = (
            <a>
                <Icon name='user'/>
                16 Friends
            </a>
        );

        return (
            <div>
                {
                    this.props.feed.map((item, index) =>
                        <div key={`card-${index}`}>
                            <Card
                                image={image(item.image, item.url)}
                                header={item.user_id}
                                meta='Friend'
                                description={item.title}
                                extra={extra}
                            /></div>)
                }
            </div>
        );
    }
}

FeedList.propTypes = {
    feed: PropTypes.arrayOf(PropTypes.object).isRequired
};

const mapStateToProps = (state) => ({
    feed: state.feed
});

const mapDispatchToProps = (dispatch) => {
    return {
        fetchFeed: () => dispatch(fetchFeed())
    };
};

export { FeedList };
export default connect(mapStateToProps, mapDispatchToProps)(FeedList);
