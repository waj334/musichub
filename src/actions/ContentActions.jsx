import * as Constants from '../Constants';
import * as API from '../api/Api.jsx';

export function loadContent(content) {
    return {
        type: Constants.CONTENT_LOAD_REQUEST,
        isLoading: true,
        content
    }
}

export function doneLoading(content, data) {
    return {
        type: Constants.CONTENT_LOAD_SUCCESS,
        isLoading: false,
        data: data,
        content
    }
}

export function errLoading(message) {
    return {
        type: Constants.CONTENT_LOAD_SUCCESS,
        isLoading: false,
        err: message
    }
}

export function load(content) {
    return dispatch => {
        dispatch(loadContent(content))

        //Actual work
        var data = null;

        switch (content.type){
            case Constants.CONT_CATALOG:
                data = API.APIGetCatalog();
                break;
            case Constants.CONT_COLLECTION:
                data = API.APIGetTrackListByCollectionId(content.id)
                break;
            default:
                dispatch(errLoading("Unknown Request"));
                return;
        }

        //Success
        console.log(content.type, data);
        dispatch(doneLoading(content, data));
    }
}