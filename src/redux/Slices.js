import {
  createSlice,
  createAsyncThunk,
  combineReducers,
} from "@reduxjs/toolkit";

export const fetchRestaurants = createAsyncThunk(
  "restaurants/fetchRestaurants",
  async ({ limit }) => {
    try {
      return fetch(
        `https://api.openbrewerydb.org/breweries?per_page=${limit}`
      ).then((response) => response.json());
    } catch (error) {
      console.log(error);
    }
  }
);

const restaurantSlice = createSlice({
  name: "restaurant",
  initialState: {
    list: [],
    status: null,
  },
  extraReducers: {
    [fetchRestaurants.pending]: (state, action) => {
      state.status = "loading";
    },
    [fetchRestaurants.fulfilled]: (state, action) => {
      state.list = action.payload;
      state.status = "success";
    },
    [fetchRestaurants.rejected]: (state, action) => {
      state.status = "failed";
    },
  },
});

const favoritesSlice = createSlice({
  name: "favorites",
  initialState: {
    data: {},
  },
  reducers: {
    handleLikeClick: (state, action) => {
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
    loadMoreRestaurants: (state, action) => {
      const totalAmountLoaded = action.payload;
      state.limit = totalAmountLoaded + 3;
    },
    loadLessRestaurants: (state, action) => {
      const totalAmountLoaded = action.payload;
      state.limit = totalAmountLoaded - 3;
    },
  },
});

const currentPictureSlice = createSlice({
  name: "currentPicture",
  initialState: {
    startingIndex: 0,
  },
  reducers: {
    nextPicture: (state, action) => {
      const thisPicture = action.payload;
      console.log(thisPicture);
      state.startingIndex = thisPicture + 1;
    },
    previousPicture: (state, action) => {
      const thisPicture = action.payload;
      console.log(thisPicture);
      state.startingIndex = thisPicture - 1;
    },
  },
});

export const { handleLikeClick } = favoritesSlice.actions;
export const { loadMoreRestaurants, loadLessRestaurants } =
  noOfRestaurantsSlice.actions;
export const { nextPicture, previousPicture } = currentPictureSlice.actions;

export default combineReducers({
  restaurantsReducer: restaurantSlice.reducer,
  favoritesReducer: favoritesSlice.reducer,
  noOfRestaurantsReducer: noOfRestaurantsSlice.reducer,
  currentPictureReducer: currentPictureSlice.reducer,
});
