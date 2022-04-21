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
  initialState: { restaurantList: [] },
  reducer: {},
});

export default restaurantsSlice.reducer;
