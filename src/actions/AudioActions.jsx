import * as Constants from '../Constants';
import * as Howler from 'howler';
import * as API from '../api/Api.jsx';

export function ActionAudioLoad(url, player=null) {
    return {
        type: Constants.AUDIO_LOAD,
        isReady: false,
        url: url,
        player: player,
        track: {}
    }
}

export function ActionAudioLoadSuccess(player, track) {
    return {
        type: Constants.AUDIO_LOAD_SUCCESS,
        isReady: true,
        player: player,
        track: track,
    }
}

export function ActionAudioLoadErr(message) {
    return {
        type: Constants.AUDIO_LOAD_ERR,
        isReady: false,
        err: message
    }
}

export function ActionAudioPlay(state) {
    return {
        type: Constants.AUDIO_PLAY,
        state
    }
}

export function ActionAudioPause(state) {
    return {
        type: Constants.AUDIO_PAUSE,
        state
    }
}

export function ActionAudioNext(state) {
    return {
        type: Constants.AUDIO_NEXT,
        state
    }
}

export function ActionAudioPrev(state) {
    return {
        type: Constants.AUDIO_PREV,
        state
    }
}

export function loadAudio(track_info) {
    console.log('loadAudio', track_info)
    return (dispatch) => {
        dispatch(ActionAudioLoad(track_info.src))
        
        global.Howler.unload();

        var player = new Howler.Howl({
            src: [track_info.src],
            html5: true
        })

        player.on('load', () => {
            dispatch(ActionAudioLoadSuccess(player, track_info));
            dispatch(playAudio(player, track_info));
        });

        player.load();
    }
}

export function playAudio(player, track_info) {
    return (dispatch) => {
        //Play this player
        player.play()

        //Signal UI
        console.log("Playing", player, track_info)
        dispatch(ActionAudioPlay({
            status: Constants.PLAYER_PLAYING,
            player: player,
            track: track_info
        }))
    }
}

export function pauseAudio(player, track_info) {
    console.log("AudioAction - pause", track_info)
    return (dispatch) => {
        player.pause();
        dispatch(ActionAudioPause({
            status: Constants.PLAYER_PAUSED,
            player: player,
            track: track_info
        }))
    }
}

export function nextTrack(track_info) {
    return (dispatch) => {
        var track_list = API.APIGetTrackListByCollectionId(track_info.catalog).Tracks

        if (track_list != undefined) {
            track_list.map( (o,i) => {
                if (o.track === track_info.track+1)
                    dispatch(loadAudio(o))
            })
        }
    }
}

export function prevTrack(track_info) {
    return (dispatch) => {
        var track_list = API.APIGetTrackListByCollectionId(track_info.catalog).Tracks

        if (track_list != undefined) {
            track_list.map( (o,i) => {
                if (o.track === track_info.track-1)
                    dispatch(loadAudio(o))
            })
        }
    }
}