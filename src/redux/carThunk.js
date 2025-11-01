import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchCars = createAsyncThunk("car/fetchCars", async () => {
  const res = await axios.get("http://localhost:8000/api/vehicles");
  return res.data.data;
});

export const fetchCarById = createAsyncThunk(
  "cars/fetchCarById",
  async (id) => {
    const res = await axios.get(`http://localhost:8000/api/vehicles/${id}`);
    return res.data.data;
  }
);

export const getUserBooking = createAsyncThunk(
  "booking/getUserBooking",
  async (id, thunkAPI) => {
    try {
      const res = await axios.get(`http://localhost:8000/api/booking/${id}`);
      return res.data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response?.data?.message || error.message);
    }
  }
);


export const getAllBookingsData = createAsyncThunk(
  "booking/getAllBookings",
  async () => {
    try {
      const res = await axios.get("http://localhost:8000/api/booking");
      return res.data.data; 
    } catch (error) {
      console.error("Error fetching bookings:", error.message);
      throw error; // this will trigger the rejected case in extraReducers
    }
  }
);