import * as Constants from '../Constants';
import * as AudioPlayer from 'web-audio-player';

function audioLoad(url) {
    return {
        type: Constants.AUDIO_LOAD,
        isReady: false,
        URL: url,
        player: null
    }
}

function audioLoadSuccess(player) {
    return {
        type: Constants.AUDIO_LOAD_SUCCESS,
        isReady: true,
        player: player
    }
}

function audioLoadErr(message) {
    return {
        type: Constants.AUDIO_LOAD_ERR,
        isReady: false,
        err: message
    }
}

function audioPlay(state) {
    return {
        type: Constants.AUDIO_PLAY,
        state
    }
}

function loadAudio(url) {
    dispatch(audioLoad(url))

    var player = AudioPlayer.createPlayer(url);

    player.on('load', () => {
        dispatchEvent(audioLoadSuccess(player))
    });
}

function playAudio(player) {
    //Play this player
    player.play()

    //Signal UI
    dispatchEvent(audioPlay({
        status: Constants.PLAYER_PLAYING
    }))
}