import React, {Component} from 'react';
import {Header, Container} from 'semantic-ui-react';

class TrackInfo extends Component {
    render() {
        return (
            <Container textAlign='center'>
                <Header>{this.props.title}</Header>
                {this.props.album}
            </Container>
        )
    }
}

export default TrackInfo;