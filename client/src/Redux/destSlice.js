import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  loading: false,
  error: null,
  dest: [],
};

export const destSlice = createSlice({
  name: "dest",
  initialState,
  reducers: {
    fetchStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchSuccess: (state, action) => {
      state.loading = false;
      state.movies = action.payload;
    },
    fetchFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { fetchStart, fetchSuccess, fetchFailure } = destSlice.actions;

export const fetchMovies = () => async (dispatch) => {
  dispatch(fetchStart());
  try {
    const response = await axios.get("/api/destination/get");
    dispatch(fetchSuccess(response.data));
  } catch (err) {
    dispatch(fetchFailure(err.message));
  }
};

export default destSlice.reducer;
