import React, {Component} from 'react';
import {connect} from 'react-redux';

import * as ContentActions from '../actions/ContentActions.jsx';
import * as AudioActions from '../actions/AudioActions.jsx';
import * as Constants from '../Constants';

import TrackInfo from './TrackInfo.jsx';

import {Grid, Button, Icon, Container, Divider} from 'semantic-ui-react';

function mapStateToProps(state) {
    console.log("ControlBar", state);
    return {
        player: state.audioReducer.player,
        isReady: state.audioReducer.isReady,
        state: state.audioReducer.state,
        track: state.audioReducer.track,
        collection: state.contentReducer.data.Collection,
        content: state.contentReducer.content
    }
}

function mapDispatchToProps(dispatch) {
    return {
        load: content => dispatch(ContentActions.load(content)),
        play: player => dispatch(AudioActions.playAudio(player)),
        pause: player => dispatch(AudioActions.pauseAudio(player))
    }
}

@connect(mapStateToProps, mapDispatchToProps)
class ControlBar extends Component {
    constructor(props) {
        super(props);

        this.onClick = this.onClick.bind(this);
        this.onPlay = this.onPlay.bind(this);
        this.status = this.status.bind(this);
    }

    onClick() {
        //Go back to catalog
        this.props.load({
            type: Constants.CONT_CATALOG
        })
    }

    onPlay() {
        if (this.props.isReady)
        {
            if (this.props.state === Constants.PLAYER_PLAYING)
                this.props.pause(this.props.player);
            else
                this.props.play(this.props.player);
        }
    }

    status() {
        var track = " ";
        var album = " ";
        
        if (this.props.content.type ===  Constants.CONT_COLLECTION) {
            track = this.props.track.name;
            album = this.props.collection.title
        }

        return <TrackInfo title={track} album={album} />
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
                        {this.status()}
                    </Container>
                </Grid.Column>
                <Grid.Column floated='right'>
                    <Button.Group floated='right'>
                        <Button icon='step backward' />
                        <Button icon={this.props.state === Constants.PLAYER_PAUSED || this.props.state === undefined ? 'play':'pause'} onClick={this.onPlay}/>
                        <Button icon='step forward' />
                    </Button.Group>
                </Grid.Column>
            </Grid.Row>
        </Grid>
    )}
}

export default ControlBar;