import { configureStore } from "@reduxjs/toolkit";

import reducer from "./Slices";

export default configureStore({
  reducer,
});
