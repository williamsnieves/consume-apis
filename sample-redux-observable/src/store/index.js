import { configureStore } from "@reduxjs/toolkit";
import { createEpicMiddleware } from "redux-observable";
import { rootEpic } from "../epics/root-epic";
import commentsReducer from "../features/comments/commentsSlice";

const epicMiddleware = createEpicMiddleware();

export const store = configureStore({
  reducer: { comments: commentsReducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: false }).concat(epicMiddleware),
  devTools: true,
});

epicMiddleware.run(rootEpic);
