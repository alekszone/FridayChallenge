export default function (state = {}, action) {
  switch (action.type) {
    case "allSongs":
      return {
        ...state,
        allSongs: action.payload,
      };

    default:
      return state;
  }
}
