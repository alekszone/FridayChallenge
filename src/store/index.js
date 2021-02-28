import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducer from "../reducer";
const composeEnhancres = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const initialStore = {
  allSongs: [],
  playSong: [],
};

export default function configureStore() {
  return createStore(
    reducer,
    initialStore,
    composeEnhancres(applyMiddleware(thunk))
  );
}
