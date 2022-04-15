import { configureStore } from "@reduxjs/toolkit";

import reducer from "../components/restaurantsSlice";

export default configureStore({
  reducer,
});
