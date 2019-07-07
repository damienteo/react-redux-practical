import { combineReducers } from "redux";

const songsReducer = () => {
  return [
    { title: "Hello", duration: "4:05" },
    { title: "Goodbye", duration: "2:15" },
    { title: "See You", duration: "3:09" },
    { title: "I'm Good", duration: "3:16" }
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }
  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
});
