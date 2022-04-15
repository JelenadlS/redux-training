import {
  createSlice,
  createAsyncThunk,
  combineReducers,
} from "@reduxjs/toolkit";

export const fetchRestaurants = createAsyncThunk(
  "restaurants/fetchRestaurants",
  async ({ limit }) => {
    return fetch(`https://api.openbrewerydb.org/breweries?per_page=${limit}`)
      .then((response) => response.json())
      .catch((error) => {
        console.error(error);
      });
  }
);

const restaurantSlice = createSlice({
  name: "restaurants",
  initialState: {
    list: [],
    status: null,
  },
  extraReducers: {
    [fetchRestaurants.pending]: (state, action) => {
      state.status = "loading";
    },
    [fetchRestaurants.fulfilled]: (state, { payload }) => {
      state.list = payload;
      state.status = "success";
    },
    [fetchRestaurants.rejected]: (state, action) => {
      state.status = "failed";
    },
  },
});

const bookmarksSlice = createSlice({
  name: "bookmarks",
  initialState: {
    data: {},
  },
  reducers: {
    restaurantLiked(state, action) {
      const id = action.payload;
      state.data[id] = !state.data[id];
    },
  },
});

export const { restaurantLiked } = bookmarksSlice.actions;
export default combineReducers({
  restaurantsReducer: restaurantSlice.reducer,
  bookmarksReducer: bookmarksSlice.reducer,
});
