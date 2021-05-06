import { combineReducers } from 'redux';

const songsReducers = () => {
    return [{
            title: 'I want that way',
            duration: '4:30'
        },
        {
            title: 'Mocarena',
            duration: '3:30'
        },
        {
            title: 'No Scrubs',
            duration: '4:17'
        },
        {
            title: 'All Stars',
            duration: '2:50'
        },
    ]
};

const selectedSongReducer = (selectedSong = null, action) => {
    if (action.type === 'SONG_SELECTED') {
        return action.payload;
    } else {
        return selectedSong;
    }
};

export default combineReducers({
    songs: songsReducers,
    selectedSong: selectedSongReducer
})