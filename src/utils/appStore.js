import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import moviesSlice from "./moviesSlice";
import configReducer from "./configSlice";

const appStore = configureStore({
  reducer: {
    user: userSlice,
    movie: moviesSlice,
    config: configReducer,
  },
});
export default appStore;
