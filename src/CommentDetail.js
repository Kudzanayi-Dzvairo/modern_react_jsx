import React from "react";

export default function CommentDetail(props) {
  const { author, timeAgo, comment, image } = props;

  return (
    <div className="comment">
      <a href="/" className="avatar">
        <img alt="avatar" src={image} />
      </a>
      <div className="content">
        <a href="/" className="author">
          {author}
        </a>
        <div className="metadata">
          <span className="date">{timeAgo}</span>
        </div>
        <div className="text">{comment}</div>
      </div>
    </div>
  );
}
