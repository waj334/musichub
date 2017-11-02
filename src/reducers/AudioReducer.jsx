import * as Constants from '../Constants';

export default function AudioReducer(state = [], action) {
    switch (action.type) {
        case Constants.AUDIO_LOAD:
            return {isReady: false}
        case Constants.AUDIO_LOAD_ERR:
            return {isReady: false, err: action.err}
        case Constants.AUDIO_LOAD_SUCCESS:
            return {isReady: true}
        case Constants.AUDIO_PLAY:
            return {state: Constants.PLAYER_PLAYING}
        default:
            return state;
    }
}