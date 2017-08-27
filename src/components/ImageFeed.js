import React from 'react'
import PropTypes from 'prop-types'
import {Card, Icon, Image} from 'semantic-ui-react'

import '../stylesheets/style.scss';

class ImageFeed extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        const image = (src, url) => (
            <Image src={src} href={url} />
        );

        const user = (author) => {
            let authorJson = JSON.parse(author);
            return (
                <div>
                    <Image src={authorJson.picture} avatar={true} href={authorJson.link}/>
                    {authorJson.name}
                </div>
            );
        };

        return (
            <div className="image_feed">
                {
                    this.props.feed.map((item, index) =>
                        <div key={`card-${index}`} className='feed_item'>
                            <Card image={image(item.image, item.url)}/>
                        </div>)
                }
            </div>
        );
    }
}

ImageFeed.propTypes = {
    feed: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default ImageFeed;
