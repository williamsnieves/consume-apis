import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
  loading: false,
};

export const commentsSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {
    addMessage: (state, action) => {
      state.message = action.payload.message;
    },
    loadComments: (state) => {
      state.loading = true;
    },
    loadCommentsSuccess: (state, action) => {
      state.data = action.payload.data;
    },
  },
});

export const { addMessage, loadComments, loadCommentsSuccess } =
  commentsSlice.actions;

export default commentsSlice.reducer;
