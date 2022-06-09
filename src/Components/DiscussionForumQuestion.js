import React from "react";
import "../Components/ComponentStyle.css";
import { Link, useNavigate } from "react-router-dom";

function DiscussionForumQuestion(props) {
  const navigate = useNavigate();
  const navigateToQuestion = () => {
    navigate('/queans',{
      state:{
        id:props.id
      }
    })
  }

  return (
    <>
      <div className="container">
        <div className="DFQBody">
          <div className="DFQBodyQuestion">
              <p onClick={navigateToQuestion}>{props.title}</p>
          </div>
          <div className="DFQBodyFunctions">
            <div className="DFQBodyFunctionComment">
              <strong>{props.answers}</strong> Answer(s)
            </div>
            <div className="DFQBodyFunctionLike">
              <strong>{props.likes}</strong> Like(s)
            </div>
            <div className="DFQBodyFunctionDislike">
              <strong>{props.dislikes}</strong> Dislike(s)
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DiscussionForumQuestion;
