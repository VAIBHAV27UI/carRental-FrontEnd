import { configureStore } from "@reduxjs/toolkit";
import UserSlice from "./userSlice/userSlice";
import CarSlice from "./userSlice/carSlice"
import BookingSlice from "./userSlice/bookingSlice"

export const store = configureStore({
  reducer: { user: UserSlice, cars:CarSlice, booking:BookingSlice },
});

// car:carReducer
