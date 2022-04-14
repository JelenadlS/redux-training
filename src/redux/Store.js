import { configureStore } from "@reduxjs/toolkit";
import restaurantsReducer from "../components/restaurantsSlice";

export default configureStore({
  reducer: {
    restaurants: restaurantsReducer,
  },
});
