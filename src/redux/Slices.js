import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const restaurantsSlice = createSlice({
  name: "restaurants",
  initialState: { restaurantList: [] },
  reducer: {},
});

export default restaurantsSlice.reducer;
