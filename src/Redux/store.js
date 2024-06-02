import {
  legacy_createStore,
  compose,
  applyMiddleware,
  combineReducers,
} from "redux";

import { productReducer } from "./products/product.reducer";
import { thunk } from "redux-thunk";

const rootReducer = combineReducers({
  products: productReducer,
});

const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;
export const store = legacy_createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);
