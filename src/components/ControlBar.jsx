import React, {Component} from 'react';
import {connect} from 'react-redux';

import * as ContentActions from '../actions/ContentActions.jsx';
import * as Constants from '../Constants';

import {Grid, Button, Icon, Container, Divider} from 'semantic-ui-react';

function mapStateToProps(state) {
    console.log(state);
    return {
    }
}

function mapDispatchToProps(dispatch) {
    return {
        load: content => dispatch(ContentActions.load(content))
    }
}

@connect(mapStateToProps, mapDispatchToProps)
class ControlBar extends Component {
    constructor(props) {
        super(props);

        this.onClick = this.onClick.bind(this);
    }

    onClick() {
        //Go back to catalog
        this.props.load({
            type: Constants.CONT_CATALOG
        })
    }

    render () {
        return (
        <Grid columns={3} container>
            <Grid.Row>
                <Grid.Column floated='left'>
                    <Button onClick={this.onClick}>
                        <Icon name='arrow left' />
                        Back
                    </Button>
                </Grid.Column>
                <Grid.Column>
                    <Container textAlign='center'>
                        Test
                    </Container>
                </Grid.Column>
                <Grid.Column floated='right'>
                    <Button.Group floated='right'>
                        <Button icon='step backward' />
                        <Button icon='play' />
                        <Button icon='step forward' />
                    </Button.Group>
                </Grid.Column>
            </Grid.Row>
        </Grid>
    )}
}

export default ControlBar;