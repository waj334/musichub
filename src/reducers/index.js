import {combineReducers} from 'redux'
import  AudioReducer from './AudioReducer.jsx';
import  ContentReducer from './ContentReducer.jsx';

export default combineReducers({
    audioReducer: AudioReducer,
    contentReducer: ContentReducer
});