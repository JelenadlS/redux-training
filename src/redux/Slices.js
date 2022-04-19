import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchRestaurants = createAsyncThunk(
  "restaurants/fetchRestaurants",
  async () => {
    try {
      return fetch(`https://api.openbrewerydb.org/breweries`).then((response) =>
        response.json()
      );
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

export default restaurantSlice.reducer;
