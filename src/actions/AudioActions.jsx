import * as Constants from '../Constants';
import * as Howler from 'howler';

export function audioLoad(url, player=null) {
    return {
        type: Constants.AUDIO_LOAD,
        isReady: false,
        url: url,
        player: player,
        track: {}
    }
}

export function audioLoadSuccess(player, track) {
    return {
        type: Constants.AUDIO_LOAD_SUCCESS,
        isReady: true,
        player: player,
        track: track,
    }
}

export function audioLoadErr(message) {
    return {
        type: Constants.AUDIO_LOAD_ERR,
        isReady: false,
        err: message
    }
}

export function audioPlay(state) {
    return {
        type: Constants.AUDIO_PLAY,
        state
    }
}

export function audioPause(state) {
    return {
        type: Constants.AUDIO_PAUSE,
        state
    }
}

export function loadAudio(track_info) {
    console.log('loadAudio', track_info)
    return (dispatch) => {
        dispatch(audioLoad(track_info.src))
        
        global.Howler.unload();

        var player = new Howler.Howl({
            src: [track_info.src],
            html5: true
        })

        player.on('load', () => {
            dispatch(audioLoadSuccess(player, track_info));
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
        console.log("Playing", player)
        dispatch(audioPlay({
            status: Constants.PLAYER_PLAYING,
            player: player,
            track: track_info
        }))
    }
}

export function pauseAudio(player, track_info) {
    return (dispatch) => {
        player.pause();
        dispatch(audioPause({
            status: Constants.PLAYER_PAUSED,
            player: player,
            track: track_info
        }))
    }
}