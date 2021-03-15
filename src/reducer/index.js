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

    default:
      return state;
  }
}
