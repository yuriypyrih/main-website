import { combineReducers, configureStore } from "@reduxjs/toolkit";
import appReducer from "./slices/appSlice";
const combinedReducer = combineReducers({
  app: appReducer,
});

const rootReducer = (state: any, action: any) => {
  if (action.type === "STORE_RESET") {
    return combinedReducer(undefined, action);
  }
  return combinedReducer(state, action);
};

export default () => {
  return configureStore({
    reducer: rootReducer,
    devTools: process.env.NODE_ENV !== "production",
    enhancers: [],
  });
};
