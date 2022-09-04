import React from "react";
import "../styles/item.css";

const Comment = ({ name, email, body }) => {
  return (
    <div className="item">
      <div className="item-header">
        <div>{name}</div>
        <div>{email}</div>
      </div>
      <div className="item-body">{body}</div>
    </div>
  );
};

export default Comment;
