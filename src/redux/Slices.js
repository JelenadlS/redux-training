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

export default restaurantsSlice.reducer;
