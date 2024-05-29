

import {
    combineReducers,
    configureStore,
    getDefaultMiddleware,
  } from "@reduxjs/toolkit";

  import logger from "redux-logger";

  import { setAvatarGoalSlice } from "./slice";

  const reducer = combineReducers({
    setAvatarGoal: setAvatarGoalSlice,
  });


  export const store = configureStore({
    reducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({ serializableCheck: false }).concat(logger),
  });
  