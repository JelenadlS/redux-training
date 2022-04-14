import { configureStore } from "@reduxjs/toolkit";

import restaurantsReducer from "../components/restaurantsSlice";
import bookmarksReducer from "../components/restaurantsSlice";

export default configureStore({
  reducer: {
    restaurants: restaurantsReducer,
    bookmarks: bookmarksReducer,
  },
});
