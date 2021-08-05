import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import logger from "redux-logger";
import thunk from "redux-thunk";

import rootReducer from "./rootReducer";

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(logger, thunk))
);

// const persistedState = loadState();
// const store = createStore(app, persistedState);
// store.subscribe(() => {
//   saveState({
//     todos: store.getState().todos,
//   });
// });
export default store;
