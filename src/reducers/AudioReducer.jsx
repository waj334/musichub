import * as Constants from '../Constants';

const initialState = {
    isReady: false,
    err: '',
    state: '',
    player: null,
    track: {}
}

export default function AudioReducer(state = initialState, action) {
    switch (action.type) {
        case Constants.AUDIO_LOAD:
            return {...initialState, isReady: false}
        case Constants.AUDIO_LOAD_ERR:
            return {...initialState, isReady: false, err: action.err}
        case Constants.AUDIO_LOAD_SUCCESS:
            return {...initialState, isReady: true, player: action.player, track: action.track}
        case Constants.AUDIO_PLAY:
        console.log(action)
            return {...initialState, isReady: true, state: Constants.PLAYER_PLAYING, player: action.state.player, track: action.state.track}
        case Constants.AUDIO_PAUSE:
            return {...initialState, isReady: true, state: Constants.PLAYER_PAUSED, player: action.state.player, track: action.state.track}
        default:
            return state;
    }
}