import {
  createSlice,
  createAsyncThunk,
  combineReducers,
} from "@reduxjs/toolkit";
import { act } from "react-dom/test-utils";

export const fetchRestaurants = createAsyncThunk(
  "restaurants/fetchRestaurants",
  async ({ startValue }) => {
    try {
      const response = await fetch(
        `https://api.openbrewerydb.org/breweries?per_page=${startValue}`
      ).then((data) => data.json());
      return response;
    } catch (error) {
      console.log(error);
    }
  }
);

const restaurantsSlice = createSlice({
  name: "restaurants",
  initialState: { restaurantList: [], status: null, loading: false },
  extraReducers: {
    [fetchRestaurants.pending]: (state, action) => {
      state.status = "loading";
      state.loading = true;
    },
    [fetchRestaurants.fulfilled]: (state, action) => {
      state.restaurantList = action.payload;
      state.status = "success";
      state.loading = false;
    },
    [fetchRestaurants.rejected]: (state, action) => {
      state.status = "failed";
      state.loading = false;
    },
  },
});

const favoritesSlice = createSlice({
  name: "favorites",
  initialState: { statusListOfLikes: {} },
  reducers: {
    handleLikeClick: (state, action) => {
      const id = action.payload;
      state.statusListOfLikes[id] = !state.statusListOfLikes[id];
    },
  },
});

const loadMoreRestaurantsSlice = createSlice({
  name: "loadMoreRestaurants",
  initialState: { startValue: 3 },
  reducers: {
    handleLoadMoreRestaurants: (state, action) => {
      const loadedRestaurants = action.payload;
      state.startValue = loadedRestaurants + 2;
    },
    handleLoadLessRestaurants: (state, action) => {
      const loadedRestaurants = action.payload;
      state.startValue = loadedRestaurants - 2;
    },
  },
});

export const { handleLikeClick } = favoritesSlice.actions;
export const { handleLoadMoreRestaurants, handleLoadLessRestaurants } =
  loadMoreRestaurantsSlice.actions;
export default combineReducers({
  restaurantsReducer: restaurantsSlice.reducer,
  favoritesReducer: favoritesSlice.reducer,
  loadMoreRestaurantsReducer: loadMoreRestaurantsSlice.reducer,
});
