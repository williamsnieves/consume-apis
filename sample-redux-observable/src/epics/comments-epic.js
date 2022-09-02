import { from, merge } from "rxjs";
import axios from "axios";
import { catchError, map, mergeMap } from "rxjs/operators";
import { ofType } from "redux-observable";
import {
  loadComments,
  loadCommentsSuccess,
} from "../features/comments/commentsSlice";

const COMMENTS_API_URL = "https://jsonplaceholder.typicode.com/comments";
const CommentsEpic = (action$) => {
  const loadCommentsFromApi = action$.pipe(
    ofType(loadComments.type),
    mergeMap(() => {
      return from(axios.get(COMMENTS_API_URL)).pipe(
        map(({ data }) => {
          return {
            type: loadCommentsSuccess.type,
            payload: {
              data,
            },
          };
        }),
        catchError((error) => {
          console.warn(error);
        })
      );
    })
  );

  return merge(loadCommentsFromApi);
};

export default CommentsEpic;
