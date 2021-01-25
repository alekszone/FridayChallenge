import { createStore, compose, applyMiddleware } from "redux";
import thunk from "react-redux";

const composeEnhancres = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const initialStore = {
  song1: [],
  song2: [],
  song3: [],
};

export default function configureStore() {
  return createStore(initialStore, composeEnhancres(applyMiddleware(thunk)));
}
