import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {Card, Icon} from 'semantic-ui-react'

// class TodoList extends React.Component {

const extra = (
    <a>
        <Icon name='user'/>
        16 Friends
    </a>
);

const FeedList = ({ feed }) => (
    <div>
        {
            //console.log(feed);
            feed.map((item, index) =>
                <Card
                    image={item.url}
                    header={item.user_id}
                    meta='Friend'
                    description='Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.'
                    extra={extra}
                    key={index}
                />)
        }
    </div>
);

FeedList.propTypes = {
    feed: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired
};

const mapStateToProps = (state) => ({
    feed: state.feed
});

export { FeedList };
export default connect(mapStateToProps)(FeedList);
