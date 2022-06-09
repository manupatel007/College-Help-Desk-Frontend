import React from "react";
import "../Components/ComponentStyle.css";

function DiscussionForumAnswer(props) {
  return (
    <>
      <div className="DFABody">
        <div className="DFABodyName">ANSWER</div>
        <div className="DFABodyAnswer" dangerouslySetInnerHTML={{__html:props.description}}>
        </div>
        <div className="DFABodyFunctions">
          <div
            className="DFABodyFunctionLike"
            data-toggle="tooltip"
            data-placement="right"
            title="Like"
          >
            🤩
          </div>
          <div className="DFABodyFunctionCount">0</div>
          <div
            className="DFABodyFunctionDislike"
            data-toggle="tooltip"
            data-placement="right"
            title="Dislike"
          >
            😩
          </div>
        </div>
      </div>
    </>
  );
}

export default DiscussionForumAnswer;
