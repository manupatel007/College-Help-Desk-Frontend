import React, { useState } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { Link } from "react-router-dom";
import {
  BsHandThumbsUp,
  BsHandThumbsDown,
  BsChat,
  BsArrowLeftCircle,
} from "react-icons/bs";
import Footer from "./Components/Footer";
import DiscussionForumAnswer from "./Components/DiscussionForumAnswer";

function DiscussionForumQueAnsPage() {
  const [queText, setQueText] = useState("");

  return (
    <>
      <div className="container">
        <section id="queAns">
          <div style={{ color: "lightgray" }}>
            <Link to="/discuss">
              <BsArrowLeftCircle size={30} />
            </Link>
          </div>

          <div className="detailedQuestion">
            <div className="queAnsQuestion">
              <h2>
                Is there anyone that can help me with Balanced Brackets in
                Python using Stack?
              </h2>
            </div>
            <div className="contentFunctionality">
              <div className="queAnsFunctionality">
                <BsHandThumbsUp size={25} style={{ marginBottom: "20px" }} />
                <BsHandThumbsDown size={25} style={{ marginBottom: "20px" }} />
                <BsChat size={25} />
              </div>
              <div className="queAnsContent">
                <p>
                  Modify the chkBracketsBal function so that the caller can
                  supply the brackets to match as arguments to this function.
                  The second argument should be a list of beginning brackets,
                  and the third argument should be a list of ending brackets.
                  The pairs of brackets at each position in the two lists; that
                  is, position 0 in the two lists might have [ and ],
                  respectively. You should be able to modify the code for the
                  function so that it does not reference any literal bracket
                  symbols, but just uses the list arguments. (Hint: The
                  method index returns the position of an item in a list.) 
                </p>
              </div>
            </div>
          </div>

          <hr style={{ color: "lightgray" }} />
          <div className="row">
            <div className="col-lg-8 col-md-12 col-sm-12">
              <DiscussionForumAnswer />
              <DiscussionForumAnswer />
              <DiscussionForumAnswer />
            </div>
            <div className="col-lg-4 col-md-12 col-sm-12"></div>
          </div>
          <hr style={{ color: "lightgray" }} />
        </section>

        <section id="ansForm">
          <h5 style={{ color: "lightblue", marginBottom: "20px" }}>
            Write your answer
          </h5>
          <CKEditor
            editor={ClassicEditor}
            data={queText}
            onChange={(event, editor) => {
              const data = editor.getData();
              setQueText(data);
            }}
          />
          <button id="submitAnsBtn">Post Answer</button>
        </section>
      </div>

      <section id="footer">
        <Footer rel="#queAns" />
      </section>
    </>
  );
}

export default DiscussionForumQueAnsPage;
