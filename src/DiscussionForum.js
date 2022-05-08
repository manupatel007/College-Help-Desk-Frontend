import React from "react";
import DiscussionForumQuestion from "./Components/DiscussionForumQuestion";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import { Link } from "react-router-dom";

function DiscussionForum() {
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
          <Link to="/">
            <p>Ask Question</p>
          </Link>
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
