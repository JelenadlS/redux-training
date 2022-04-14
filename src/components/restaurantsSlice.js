import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

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
    [fetchRestaurants.peding]: (state, action) => {
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

export default restaurantSlice.reducer;
