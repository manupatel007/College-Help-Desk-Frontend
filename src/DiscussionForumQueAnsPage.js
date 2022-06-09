import React, { useState, useEffect } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { Link, useLocation } from "react-router-dom";
import {
  BsHandThumbsUp,
  BsHandThumbsDown,
  BsChat,
  BsArrowLeftCircle,
} from "react-icons/bs";
import Footer from "./Components/Footer";
import DiscussionForumAnswer from "./Components/DiscussionForumAnswer";

function DiscussionForumQueAnsPage() {
  const location = useLocation();
  const [queText, setQueText] = useState("");
  const [question, setQuestion] = useState({})
  const [answers, setAnswers] = useState([])
  const [updateQue, setupdateque] = useState(0)
  const valueee = JSON.parse(localStorage.getItem("login"));

  const postAnswer = () => {
    if(valueee){
      var headerObj = {
        "Content-type": "application/json",
        Authorization: "Bearer " + valueee.token,
      };

      fetch('https://collegebackenc.herokuapp.com/chats/addanswer/',{
        method: "POST",
        body: JSON.stringify({
          author: 1,
          title: "Nothing",
          description: queText,
          subjectTag:"general",
          parentQuestionId:question.id
        }),
        headers:headerObj
      })
      .then((response) => {
        return response.json();
      })

      // Displaying results to console
      .then((json) => {
        console.log(json);
        setupdateque(updateQue+1);
        // console.log(resources);
      })
      // .then(() => {
      //     console.log(resources);
      // })
      .catch((error) => console.log(error));
    }
    else{
      alert("You need to login for posting a question")
    }
      
  }

  const getQuestionDetails = () => {
    fetch('https://collegebackenc.herokuapp.com/chats/question/'+location.state.id+'/')
    .then((request) => {
      return request.json();
    })
    .then((json) => {
      console.log(json);
      setQuestion({...json.Question})
      setAnswers([...json.Answers])
    })
    .catch((errors)=>{
      console.log(errors);
    })
  }

  useEffect(() => {
    getQuestionDetails();
  }, [updateQue])

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
                {question.title}
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
                  {question.description}
                </p>
              </div>
            </div>
          </div>

          <hr style={{ color: "lightgray" }} />
          <div className="row">
            <div className="col-lg-8 col-md-12 col-sm-12">
              {
                answers.length>0 && answers.map((answer, i) => {
                  return (
                    <DiscussionForumAnswer description={answer.description} />
                  )
                })
              }
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
          <button id="submitAnsBtn" onClick={postAnswer}>Post Answer</button>
        </section>
      </div>

      <section id="footer">
        <Footer rel="#queAns" />
      </section>
    </>
  );
}

export default DiscussionForumQueAnsPage;
