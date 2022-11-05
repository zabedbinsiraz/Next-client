import { AnyAction, combineReducers, configureStore } from "@reduxjs/toolkit";
import { createWrapper, HYDRATE } from "next-redux-wrapper";
import anotherExamplesReducer from "../Modules/Example/anotherSlice";

import exampleReducer from "../Modules/Example/exampleSlice";

const combinedReducer = combineReducers({
  allExamples: exampleReducer,
  anotherExamples: anotherExamplesReducer,
});

const reducer = (
  state: ReturnType<typeof combinedReducer>,
  action: AnyAction
) => {
  if (action.type === HYDRATE) {
    const nextState = {
      ...state, // use previous state
      ...action.payload, // apply delta from hydration
    };
    return nextState;
  } else {
    return combinedReducer(state, action);
  }
};

export function makeStore() {
  return configureStore({
    reducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        immutableCheck: false,
        serializableCheck: false,
      }),
  });
}

const store = makeStore();

export default store;
export const wrapper = createWrapper(makeStore);
