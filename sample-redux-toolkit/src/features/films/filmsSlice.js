import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
  loading: false,
};

const FILMS_ENDPOINT = "https://swapi.dev/api/films";

export const fetchFilmsFromAPI = createAsyncThunk(
  "films/fetchFilms",
  async () => {
    const response = await fetch(FILMS_ENDPOINT);
    const json = await response.json();

    return json.results;
  }
);

export const filmsSlice = createSlice({
  name: "films",
  initialState,
  reducers: {
    getFilms: (state, action) => {
      state.films = action.payload;
    },
  },
  extraReducers: {
    [fetchFilmsFromAPI.fulfilled]: (state, action) => {
      state.data = action.payload;
    },
  },
});
