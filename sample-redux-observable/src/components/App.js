import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadComments } from "../features/comments/commentsSlice";
import Comment from "./Commnet";

const App = () => {
  const dispatch = useDispatch();
  const comments = useSelector((state) => state.comments.data);

  React.useEffect(() => {
    dispatch(loadComments());
  }, []);

  return (
    <section className="container">
      {comments.map((comment) => (
        <Comment key={comment.id} {...comment} />
      ))}
    </section>
  );
};

export default App;
