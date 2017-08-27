import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import SuisseMap from '../components/SuisseMap'
import ImageFeed from '../components/ImageFeed'

import fetchFeed from '../actions/FeedActions'

import '../stylesheets/style.scss';

class FeedContainer extends React.Component {

    constructor(props) {
        super(props);
        this.tick = this.tick.bind(this);

        // Only set state directly in constructor.  For all other state mutations
        // use this.setState().
        setInterval(this.tick, (30 * 1000));
        this.state = {
            counter: 0,
            location: {tint: 'basel', lat: 47.55, lng: 7.58}
        };

    }

    componentDidMount() {
        this.props.fetchFeed(this.state.location.tint);
    }

    componentWillUnmount() {
        this.clearInterval(this.state.timer);
    }

    tick() {
        const TINTS = [
            {tint: 'aigle', lat: 46.31, lng: 6.97},
            {tint: 'vevey', lat: 46.46, lng: 6.84},
            {tint: 'zurich-ch', lat: 47.37, lng: 8.53},
            {tint: 'rhinefalls', lat: 47.67, lng: 8.61},
            {tint: 'bern', lat: 46.9480, lng: 7.4474},
            {tint: 'leysin', lat: 46.34, lng: 7.01},
            {tint: 'basel', lat: 47.55, lng: 7.58}
        ];

        let nextTintIndex = this.state.counter % TINTS.length;
        this.props.fetchFeed(TINTS[nextTintIndex].tint);

        this.setState({
            counter: this.state.counter + 1,
            location: TINTS[nextTintIndex]
        });
    }

    render() {
        let location = this.state.location;
        return (
            <div className="feed_container">
                <SuisseMap markerLat={location.lat} markerLng={location.lng} />
                <ImageFeed feed={this.props.feed} />
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
