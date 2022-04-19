import { configureStore } from "@reduxjs/toolkit";
import restaurantSlice from "./Slices";

export default configureStore({
  reducer: { restaurant: restaurantSlice },
});
