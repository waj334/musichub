import * as Constants from '../Constants';

export function APIGetCatalog() {
    return Constants.CATALOG;
}

export function APIGetCollectionById(id) {
    return Constants.CATALOG[id];
}

export function APIGetTrackListByCollectionId(id) {
    console.log("ALLEGED DATA:", Constants.CATALOG[id], Constants.TRACKS)
    return {
        Collection: Constants.CATALOG[id],
        Tracks: Constants.TRACKS[id]
    }
}

export function APIGetTrackById(Collection_id, track_no) {
    return Constants.TRACKS[track_no];
}