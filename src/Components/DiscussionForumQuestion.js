import React from "react";
import "../Components/ComponentStyle.css";
import { Link } from "react-router-dom";

function DiscussionForumQuestion() {
  return (
    <>
      <div className="container">
        <div className="DFQBody">
          <div className="DFQBodyQuestion">
            <Link to="/queans">
              <p>Java Linked list is not found</p>
            </Link>
          </div>
          <div className="DFQBodyFunctions">
            <div className="DFQBodyFunctionComment">
              <strong>2</strong> Comment(s)
            </div>
            <div className="DFQBodyFunctionLike">
              <strong>3</strong> Like(s)
            </div>
            <div className="DFQBodyFunctionDislike">
              <strong>1</strong> Dislike(s)
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DiscussionForumQuestion;
