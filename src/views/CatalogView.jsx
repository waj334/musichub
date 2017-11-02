import React, {Component} from 'react';
import {Card} from 'semantic-ui-react';

import CollectionCard from '../components/CollectionCard.jsx';

class CatalogView extends Component {
    render() {
        return (
        <Card.Group>
        {
            this.props.data.map((d,i) => {
                return <CollectionCard id={d.id} img={d.img} title={d.title} year={d.year} onClick={this.props.onClick}/>
            })
        }
        </Card.Group>
        )}
}

export default CatalogView;