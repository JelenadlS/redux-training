import { configureStore } from "@reduxjs/toolkit";
import restaurantsSlice from "./Slices";

export default configureStore({
  reducer: { restaurants: restaurantsSlice },
});
