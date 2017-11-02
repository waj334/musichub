import React, {Component} from 'react';
import {Table} from 'semantic-ui-react';

class TrackRow extends Component {
    constructor(props) {
        super(props);

        this.onClick = this.onClick.bind(this);
    }

    onClick() {
        this.props.onClick(this.props.track);
    }

    onHover() {

    }

    render() {
        return (
            <Table.Row onClick={this.onClick} style={{cursor: 'pointer'}}>
                <Table.Cell>{this.props.track}</Table.Cell>
                <Table.Cell>{this.props.name}</Table.Cell>
            </Table.Row>
        )
    }
}

export default TrackRow;