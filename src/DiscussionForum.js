import React, { useEffect, useState } from "react";
import DiscussionForumQuestion from "./Components/DiscussionForumQuestion";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import "./App.css";

function DiscussionForum() {
  const [text, setText] = useState("");
  const [questions, setQuestions] = useState([]);
  const valueee = JSON.parse(localStorage.getItem("login"));

  const getQuestions = () => {
    fetch('https://collegebackenc.herokuapp.com/chats/allquestions/')
    .then((response) => {
      return response.json();
    })
    .then((json) => {
      console.log(json);
      setQuestions([...json]);
    })
    .catch((error) => console.log(error));
  }

  useEffect(()=>{
    getQuestions();
  }, [])

  const postQuestion = () => {
    if(valueee){
      var headerObj = {
        "Content-type": "application/json",
        Authorization: "Bearer " + valueee.token,
      };

      fetch('https://collegebackenc.herokuapp.com/chats/addquestion/',{
        method: "POST",
        body: JSON.stringify({
          author: 1,
          title: document.getElementById('queTitle').value,
          description: document.getElementById('queDescription').value,
          subjectTag:"general"
        }),
        headers:headerObj
      })
      .then((response) => {
        return response.json();
      })

      // Displaying results to console
      .then((json) => {
        console.log(json);
        // console.log(resources);
      })
      .then(() =>
        {window.location.reload();}
      )
      // .then(() => {
      //     console.log(resources);
      // })
      .catch((error) => console.log(error));
    }
    else{
      alert("You need to login for posting a question")
    }
      
  }

  const show = () => {
    document.getElementById("light").style.display = "block";
    document.getElementById("fade").style.display = "block";
  };

  const hide = () => {
    document.getElementById("light").style.display = "none";
    document.getElementById("fade").style.display = "none";
  };

  useEffect(() => {
    document.title = "Discussion Forum";
  }, []);

  return (
    <>
      <div className="container">
        <div id="disHead" className="DiscussionForumHead">
          <Navbar />

          <h1>Discussion Forum</h1>

          <p>
            Let your curosity quench it's thirst.
          </p>
        </div>

        <div className="AskDiscussionQuestion">
          <h2 id="DiscussionForumH2">Questions</h2>

          <button id="queBtn" onClick={show}>
            <a href="#disHead"> Ask a Question</a>
          </button>
          <div id="light" className="whiteContent">
            <button id="queCloseBtn" onClick={hide}>
              X
            </button>
            <h5>Write your question</h5>

            <input id="queTitle" type="text" placeholder="Question title" />
            <br />
            <br />
            <input
              id="queDescription"
              type="text"
              placeholder="Question description"
            />
            <br />
            <br />
            <button id="submitQueBtn" onClick={postQuestion}>Post Question</button>
          </div>
          <div id="fade" className="blackOverlay"></div>
        </div>

        {
          questions.length>0 && questions.map((question,i) => {
            return (
              <DiscussionForumQuestion title={question.title} likes={question.upvoteCount} dislikes={question.downvoteCount} answers={question.answerCount} id={question.id} />
            )
          })
        }

        {/* <DiscussionForumQuestion />
        <DiscussionForumQuestion />
        <DiscussionForumQuestion />
        <DiscussionForumQuestion /> */}

        <section id="footer">
          <Footer rel="#LandingPageTop" />
        </section>
      </div>
    </>
  );
}

export default DiscussionForum;
