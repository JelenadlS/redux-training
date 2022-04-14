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
  // reducers: {
  //   // restaurantLikedUpdated(state, action) {
  //   //   const { id, like } = action.payload;
  //   //   const existingRestaurant = state.find(
  //   //     (restaurant) => restaurant.id === id
  //   //   );
  //   //   if (existingRestaurant) {
  //   //     existingRestaurant.like = like;
  //   //   }
  //   // },
  //   restaurantLikedUpdated(state, action) {
  //     state.list = [...state.list, ...action.payload];
  //   },
  // },
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
//export const { restaurantLikedUpdated } = restaurantSlice.actions;

const bookmarksSlice = createSlice({
  name: "bookmarks",
  initialState: {
    list: [],
    status: null,
  },
});

export default combineReducers({
  restaurantsReducer: restaurantSlice.reducer,
  bookmarksReducer: bookmarksSlice.reducer,
});
