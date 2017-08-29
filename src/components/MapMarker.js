import React from 'react'
import { Icon } from 'semantic-ui-react'
import '../stylesheets/style.scss'

class MapMarker extends React.Component {

    render() {
        return(
            <div className='map_marker'>
                <Icon name='marker' size='huge' color='red' />
            </div>
        )
    }
}

export default MapMarker;
