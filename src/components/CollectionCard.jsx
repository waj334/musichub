import React, {Component} from 'react';
import {Card, Image, Icon} from 'semantic-ui-react';

class CollectionCard extends Component {
    constructor(props) {
        super(props);

        this.onClick = this.onClick.bind(this);
    }

    onClick() {
        this.props.onClick(this.props.id);
    }
    render() {
        return (
            <Card onClick={this.onClick}>
                <Image src={this.props.img} />
                <Card.Content>
                    <Card.Header>
                        {this.props.title}
                    </Card.Header>
                    <Card.Meta>
                        {this.props.year}
                    </Card.Meta>
                </Card.Content>
            </Card>
        )
    }
}

export default CollectionCard;