//Content Loading Actions
export const CONTENT_LOAD_REQUEST = 'CONTENT_LOAD_REQUEST';
export const CONTENT_LOAD_SUCCESS = 'CONTENT_LOAD_SUCCESS';
export const CONTENT_LOAD_FAILURE = 'CONTENT_LOAD_FAILURE';

//Audio Player Action
export const AUDIO_LOAD = 'AUDIO_LOAD';
export const AUDIO_LOAD_SUCCESS = 'AUDIO_LOAD_SUCCESS';
export const AUDIO_LOAD_ERR = 'AUDIO_LOAD_ERR';
export const AUDIO_PLAY = 'AUDIO_PLAY';
export const AUDIO_PAUSE = 'AUDIO_PAUSE';
export const AUDIO_NEXT = 'AUDIO_NEXT';
export const AUDIO_PREV = 'AUDIO_PREV';

//Content Types
export const CONT_CATALOG = 'CONT_CATALOG';
export const CONT_COLLECTION = 'CONT_COLLECTION';
export const CONT_TRACK = 'CONT_TRACK';

//Audio Player states
export const PLAYER_PLAYING = 'PLAYER_PLAYING';
export const PLAYER_PAUSED = 'PLAYER_PAUSED';
export const PLAYER_STOPPED = 'PLAYER_STOPPED';

//Catalog
export const CATALOG = [
    {
        id: 0,
        title: "The Intro",
        year: "2017",
        img: "/img/snd_back.svg",
    },
    {
        id: 1,
        title: "Index",
        year: "2017",
        img: "/img/snd_back.svg",
    }
]

const A1_INDEX = [
    {
        track: 1,
        name: "1 Of These Dayz",
        src: "https://s3.amazonaws.com/a1music/index/Faded-v3.mp3"
    },
    {
        track: 2,
        name: "Awkwardly Amazing",
        src: "https://s3.amazonaws.com/a1music/index/Awkwardly+Amazing+-+v4.mp3"
    },
    {
        track: 3,
        name: "Bad Sh!T",
        src: "https://s3.amazonaws.com/a1music/index/Bad+Shit+-+v2.mp3"
    },
    {
        track: 4,
        name: "Hey You",
        src: "https://s3.amazonaws.com/a1music/index/Hey+You+-+v6.mp3"
    },
    {
        track: 5,
        name: "Ion Even Know",
        src: "https://s3.amazonaws.com/a1music/index/Ion+even+know.mp3"
    },
    {
        track: 6,
        name: "Isolation",
        src: "https://s3.amazonaws.com/a1music/index/Isolation+-+v5.mp3"
    },
    {
        track: 7,
        name: "Life Go",
        src: "https://s3.amazonaws.com/a1music/index/Life+Go.mp3"
    },
    {
        track: 8,
        name: "Lustful Bliss",
        src: "https://s3.amazonaws.com/a1music/index/Lustful+Bliss+-+v5.mp3"
    },
    {
        track: 9,
        name: "Miss Mystery",
        src: "https://s3.amazonaws.com/a1music/index/Miss+Mystery+-+v2.mp3"
    }
]

const A1_THE_INTRO = [
    {
        track: 1,
        name: "Bottom",
        src: "https://s3.amazonaws.com/a1music/the_intro/Bottom+-+v2.mp3"
    },
    {
        track: 2,
        name: "Pillar",
        src: "https://s3.amazonaws.com/a1music/the_intro/Pillar-v2.mp3"
    },
    {
        track: 3,
        name: "Chillin Between",
        src: "https://s3.amazonaws.com/a1music/the_intro/Chillin+Between-v2.mp3"
    },
    {
        track: 4,
        name: "In The Moment",
        src: "https://s3.amazonaws.com/a1music/the_intro/In+The+Moment-v2.mp3"
    },
    {
        track: 5,
        name: "Old Wayz",
        src: "https://s3.amazonaws.com/a1music/the_intro/Old+Wayz.mp3"
    },
    {
        track: 6,
        name: "Look Back",
        src: "https://s3.amazonaws.com/a1music/the_intro/Look+Back-v2.mp3"
    },
    {
        track: 7,
        name: "Found Swag",
        src: "https://s3.amazonaws.com/a1music/the_intro/Found+Swag.mp3"
    },
    {
        track: 8,
        name: "Denial's Anthem",
        src: "https://s3.amazonaws.com/a1music/the_intro/Denial's+Anthem.mp3"
    },
    {
        track: 9,
        name: "Paranioa (At the top)",
        src: "https://s3.amazonaws.com/a1music/the_intro/Paranoia-v2.mp3"
    }
]

export const TRACKS = [
    A1_THE_INTRO,
    A1_INDEX
]