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

const noOfRestaurantsSlice = createSlice({
  name: "noOfRestaurants",
  initialState: {
    limit: 3,
  },
  reducers: {
    increasedNoOfRestaurants(state, action) {
      const number = action.payload;
      state.limit = number + 2;
    },
    decreasedNoOfRestaurants(state, action) {
      const number = action.payload;
      state.limit = number - 2;
    },
  },
});

const currentPictureSlice = createSlice({
  name: "currentPicture",
  initialState: {
    start: 0,
  },
  reducers: {
    nextPicture(state, action) {
      const currentIndex = action.payload;
      state.start = currentIndex + 1;
    },
    prevPicture(state, action) {
      const currentIndex = action.payload;
      state.start = currentIndex - 1;
    },
  },
});

export const { restaurantLiked } = bookmarksSlice.actions;
export const { increasedNoOfRestaurants, decreasedNoOfRestaurants } =
  noOfRestaurantsSlice.actions;
export const { nextPicture, prevPicture } = currentPictureSlice.actions;

export default combineReducers({
  restaurantsReducer: restaurantSlice.reducer,
  bookmarksReducer: bookmarksSlice.reducer,
  noOfRestaurantsReducer: noOfRestaurantsSlice.reducer,
  currentPictureReducer: currentPictureSlice.reducer,
});
