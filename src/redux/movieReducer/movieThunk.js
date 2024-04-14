import { createAsyncThunk } from "@reduxjs/toolkit";
import { authSer } from "../../services/authSer";

export const getListGheThunk = createAsyncThunk(
  "movieReducer/movieThunk",
  async (payload, { rejectWithValue }) => {
    try {
      const data = await authSer.getListGhe(payload);
      console.log("data: ", data);
      return data.data.content;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
