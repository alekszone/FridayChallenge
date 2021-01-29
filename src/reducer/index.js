export default function (state = {}, action) {
  switch (action.type) {
    case "album1":
      return {
        ...state,
        song1: action.payload,
      };

    case "album2":
      return {
        ...state,
        song2: action.payload,
      };

    case "album3":
      return {
        ...state,
        song3: action.payload,
      };
    default:
      return state;
  }
}
