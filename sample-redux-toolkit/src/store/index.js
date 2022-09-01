import { configureStore } from "@reduxjs/toolkit";
import { filmsSlice } from "../features/films/filmsSlice";

export const store = configureStore({
  reducer: { films: filmsSlice.reducer },
});
