import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {Card, Icon, Image} from 'semantic-ui-react'
import fetchFeed from '../actions/FeedActions'
import '../style.scss';

class FeedList extends React.Component {

    constructor(props) {
        super(props);

        let timer = setInterval(this.tick, 1000);

        // Only set state directly in constructor.  For all other state mutations
        // use this.setState().
        this.state = {
            timer,
            counter: 0
        };
    }

    componentDidMount() {
        this.props.fetchFeed('laschool');
    }

    componentWillUnmount() {
        this.clearInterval(this.state.timer);
    }

    tick() {
        this.setState({
            counter: this.state.counter + 1
        });
    }

    render() {
        const image = (src, url) => (
            <Image src={src} href={url} />
        );

        const user = (author) => {
            let authorJson = JSON.parse(author);
            return (
                <div>
                    <Image src={authorJson.picture} avatar={true} href={authorJson.link} />
                    {authorJson.name}
                </div>
            );
        };

        return (
            <div className="feeds">
                {
                    this.props.feed.map((item, index) =>
                        <div key={`card-${index}`}>
                            <Card
                                image={image(item.image, item.url)}
                                header={item.user_id}
                                meta='Friend'
                                description={item.title}
                                extra={user(item.author)}
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
        fetchFeed: (tint) => dispatch(fetchFeed(tint))
    };
};

export { FeedList };
export default connect(mapStateToProps, mapDispatchToProps)(FeedList);
