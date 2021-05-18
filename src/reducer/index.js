export default function (state = {}, action) {
  switch (action.type) {
    case "allSongs":
      return {
        ...state,
        allSongs: action.payload,
      };

    case "playSong":
      return {
        ...state,
        playSong: action.payload,
      };
    case "image":
      return {
        ...state,
        image: action.payload,
      };
    case "likeSong":
      return {
        ...state,
        likedSong: state.likedSong.concat([action.payload]),
      };
    case "dislikeSong":
      return {
        ...state,
        likedSong: state.likedSong.filter(
          (item, index) => index !== action.payload
        ),
      };

    case "createPlaylist":
      return {
        ...state,
        playlist:
          state.playlist &&
          state.playlist.concat({ name: action.payload, songs: [] }),
      };
      console.log(state.playlist, "si vjen e dhena ktu");
    case "addSongToPlatList":
      console.log("ca ka mrena kjo ", action.payload);
      const info =
        state.playlist &&
        state.playlist.findIndex((data) => data.name === action.payload.name);

      let playlist;
      if (info !== -1)
        playlist = state.playlist[info].songs.concat(action.payload.songs);
      return {
        ...state,
        playlist: {
          ...state.playlist,
          playlist,
        },
      };

    default:
      return state;
  }
}
