import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchRestaurants = createAsyncThunk(
  "restaurants/fetchRestaurants",
  async () => {
    try {
      const response = await fetch(
        `https://api.openbrewerydb.org/breweries`
      ).then((data) => data.json());
      return response;
    } catch (error) {
      console.log(error);
    }
  }
);

const restaurantsSlice = createSlice({
  name: "restaurants",
  initialState: { restaurantList: [], status: null },
  extraReducers: {
    [fetchRestaurants.pending]: (state, action) => {
      state.status = "loading";
    },
    [fetchRestaurants.fulfilled]: (state, action) => {
      state.restaurantList = action.payload;
      state.status = "success";
    },
    [fetchRestaurants.rejected]: (state, action) => {
      state.status = "failed";
    },
  },
});

export default restaurantsSlice.reducer;
