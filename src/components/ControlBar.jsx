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
        play: (player, track) => dispatch(AudioActions.playAudio(player, track)),
        pause: (player, track) => dispatch(AudioActions.pauseAudio(player, track)),
        next: (track) => dispatch(AudioActions.nextTrack(track)),
        prev: (track) => dispatch(AudioActions.prevTrack(track)),
    }
}

@connect(mapStateToProps, mapDispatchToProps)
class ControlBar extends Component {
    constructor(props) {
        super(props);

        this.onClick = this.onClick.bind(this);
        this.onPlay = this.onPlay.bind(this);
        this.onNext = this.onNext.bind(this);
        this.onPrev = this.onPrev.bind(this);
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
            if (this.props.state === Constants.PLAYER_PLAYING) {
                console.log("Track Pause", this.props)
                this.props.pause(this.props.player, this.props.track);
            }
            else {
                this.props.play(this.props.player, this.props.track);
            }
        }
    }

    onNext() {
        this.props.next(this.props.track)
    }

    onPrev() {
        this.props.prev(this.props.track)
    }

    status() {
        var track = " ";
        var album = " ";
        
        if (this.props.track != undefined) {
            track = this.props.track.name;
        }

        if (this.props.collection != undefined) {
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
                        <Icon name='arrow left' /> Back
                    </Button>
                </Grid.Column>
                <Grid.Column>
                    <Container textAlign='center'>
                        {this.status()}
                    </Container>
                </Grid.Column>
                <Grid.Column floated='right'>
                    <Button.Group floated='right'>
                        <Button icon='step backward' onClick={this.onPrev} />
                        <Button icon={this.props.state === Constants.PLAYER_PAUSED || this.props.player === null ? 'play':'pause'} onClick={this.onPlay}/>
                        <Button icon='step forward' onClick={this.onNext} />
                    </Button.Group>
                </Grid.Column>
            </Grid.Row>
        </Grid>
    )}
}

export default ControlBar;