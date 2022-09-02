import { combineEpics } from "redux-observable";
import commentsEpic from "./comments-epic";

export const rootEpic = combineEpics(commentsEpic);
