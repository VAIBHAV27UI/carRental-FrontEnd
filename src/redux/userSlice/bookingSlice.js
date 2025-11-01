import { createSlice } from "@reduxjs/toolkit";
import { getAllBookingsData, getUserBooking } from "../carThunk";

const initialState = {
  bookings: [],
  loading: false,
  error: null,
};

const bookingSlice = createSlice({
  name: "booking",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getUserBooking.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getUserBooking.fulfilled, (state, action) => {
        state.loading = false;
        state.bookings = action.payload;
      })
      .addCase(getUserBooking.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(getAllBookingsData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getAllBookingsData.fulfilled, (state, action) => {
        state.loading = false;
        state.bookings = action.payload;
      })
      .addCase(getAllBookingsData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default bookingSlice.reducer;
