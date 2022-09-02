import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadComments } from "../features/comments/commentsSlice";

const App = () => {
  const dispatch = useDispatch();
  const comments = useSelector((state) => state.comments.data);

  React.useEffect(() => {
    dispatch(loadComments());
  }, []);

  return (
    <ul>
      {comments.map((comment) => (
        <li key={comment.id}>{comment.name}</li>
      ))}
    </ul>
  );
};

export default App;
