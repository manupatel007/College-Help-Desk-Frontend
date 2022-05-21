import React, { useEffect, useState } from "react";
import DiscussionForumQuestion from "./Components/DiscussionForumQuestion";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import "./App.css";

function DiscussionForum() {
  const [text, setText] = useState("");

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
        <div className="DiscussionForumHead">
          <Navbar />

          <h1>Discussion Forum</h1>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
            voluptas sint voluptates iusto debitis ratione nostrum ut voluptatum
            sit rem! Aspernatur magni fugiat corrupti dolorum praesentium, amet,
            autem nihil doloremque quae debitis facere rerum incidunt maiores
            culpa tempore ullam, tempora quaerat temporibus ducimus consequuntur
            nesciunt. Commodi libero numquam laudantium, eveniet debitis,
            dolorum esse aliquid reiciendis et quisquam sequi laborum fuga eos
            minus provident deserunt maxime quibusdam. Et, ea. Aperiam,
            repellat! Vel, quo exercitationem voluptatibus soluta consectetur id
            hic corrupti culpa eveniet iure atque quisquam praesentium fugiat in
            officia saepe nihil? Facilis quis illo totam ullam quia repellendus
            voluptate molestiae officiis?
          </p>
        </div>

        <div className="AskDiscussionQuestion">
          <h2 id="DiscussionForumH2">Questions</h2>

          <button id="queBtn" onClick={show}>
            Ask a Question
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
            <button id="submitQueBtn">Post Question</button>
          </div>
          <div id="fade" className="blackOverlay"></div>
        </div>

        <DiscussionForumQuestion />
        <DiscussionForumQuestion />
        <DiscussionForumQuestion />
        <DiscussionForumQuestion />

        <section id="footer">
          <Footer rel="#LandingPageTop" />
        </section>
      </div>
    </>
  );
}

export default DiscussionForum;
