import React from "react";
import "../Components/ComponentStyle.css";

function DiscussionForumAnswer() {
  return (
    <>
      <div className="DFABody">
        <div className="DFABodyName">ANSWER 1</div>
        <div className="DFABodyAnswer">
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum,
            consequatur debitis! Facere reiciendis eius quibusdam. Fugiat
            aspernatur, hic alias assumenda animi, iste distinctio quia pariatur
            laborum cupiditate, facilis accusamus sint quis modi quasi at
            repellat dignissimos veritatis vel debitis odit vero a. Vel,
            excepturi harum?
          </p>
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
          <div className="DFABodyFunctionCount">2</div>
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
