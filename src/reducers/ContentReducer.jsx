import * as Constants from '../Constants';

const initialState = {
    isLoading: true,
    content: {
        type: Constants.CONT_ANY,
        id: null
    },
    data: {
        Collection: {
            title: ""
        }
    }
}

export default function ContentReducer(state = initialState, action) {
    switch(action.type) {
        case Constants.CONTENT_LOAD_REQUEST:
            return {...initialState, isLoading: true}
        case Constants.CONTENT_LOAD_SUCCESS:
            console.log("reducer", action)
            return {...initialState, isLoading: false, data:action.data, content:action.content}
        case Constants.CONTENT_LOAD_FAILURE:
            return {err: action.err, isLoading:false}
        default:
            return state;
    }
}