import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {Card, Icon, Image} from 'semantic-ui-react'
import fetchFeed from '../actions/FeedActions'
import '../stylesheets/style.scss';

class FeedContainer extends React.Component {

    constructor(props) {
        super(props);
        this.tick = this.tick.bind(this);

        // Only set state directly in constructor.  For all other state mutations
        // use this.setState().
        setInterval(this.tick, 1 * (60 * 1000));
        this.state = {
            counter: 0
        };

    }

    componentDidMount() {
        this.props.fetchFeed('basel');
    }

    componentWillUnmount() {
        this.clearInterval(this.state.timer);
    }

    tick() {
        const TINTS = ['aigle', 'vevey', 'zurich-ch', 'rhinefalls', 'bern', 'leysin', 'basel'];

        let nextTintIndex = this.state.counter % TINTS.length;
        this.props.fetchFeed(TINTS[nextTintIndex]);

        this.setState({
            counter: this.state.counter + 1
        });
    }

    render() {
        const image = (src, url) => (
            <Image src={src} href={url} />
        );

        const user = (author) => {
            console.log(author);
            let authorJson = JSON.parse(author);
            return (
                <div>
                    <Image src={authorJson.picture} avatar={true} href={authorJson.link} />
                    {authorJson.name}
                </div>
            );
        };

        console.log(this.props.feed[0]);
        return (
            <div>
                {
                    this.props.feed.map((item, index) =>
                        <div key={`card-${index}`}>
                            <Card
                                image={image(item.image, item.url)}
                                header={item.user_id}
                                meta='Enter meta here!'
                                description={item.title}
                                extra={user(item.author)}
                            /></div>)
                }
            </div>
        );
    }
}

FeedContainer.propTypes = {
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

export { FeedContainer };
export default connect(mapStateToProps, mapDispatchToProps)(FeedContainer);
