import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userReducer/userSlice";
import loadingSlice from "./loadingReducer/loadingSlice";
import movieSlice from "./movieReducer/movieSlice";

export default configureStore({
  reducer: {
    movieSlice: movieSlice,
    userReducer: userSlice,
    loadingReducer: loadingSlice,
  },
});
