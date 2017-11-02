import React, {Component} from 'react';
import {Table, Header} from 'semantic-ui-react';

import TrackRow from '../components/TrackRow.jsx';

class CollectionView extends Component {
    constructor(props) {
        super(props);

        this.trackRow = this.trackRow.bind(this);
        this.onClick = this.onClick.bind(this);
    }

    onClick(track) {
        alert("Track " + track + " selected!");
    }

    trackRow(d,i) {
        return (
            <TrackRow track={d.track} name={d.name} onClick={this.onClick} />
        )
    }
    render() {
        return (
            <div>
                <Header>{this.props.data.Collection.title}</Header>
                <Table singleLine>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>Track No.</Table.HeaderCell>
                            <Table.HeaderCell>Track Name</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>

                    <Table.Body>
                        {this.props.data.Tracks.map(this.trackRow)}
                    </Table.Body>
                </Table>
            </div>
        )
    }
}

export default CollectionView;