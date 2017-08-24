import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {Card, Icon} from 'semantic-ui-react'

// class TodoList extends React.Component {

const FeedList = ({ feed }) => (
    <div>
        <Card
            image='/assets/images/avatar/large/elliot.jpg'
            header='Elliot Baker'
            meta='Friend'
            description='Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.'
            extra={extra}
        />
    </div>
);

FeedList.propTypes = {
    todos: PropTypes.arrayOf(PropTypes.shape({
        text: PropTypes.string.isRequired
    }).isRequired).isRequired
};

const mapStateToProps = (state) => ({
    todos: state.todos
});

export { FeedList };
export default connect(mapStateToProps)(FeedList);
