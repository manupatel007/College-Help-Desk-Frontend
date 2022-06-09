import React from "react";
import { Link } from "react-router-dom";
import "./App.css";
import Footer from "./Components/Footer";
import { BsArrowLeftCircle } from "react-icons/bs";

function blogPost() {
  return (
    <>
      <section id="blogPageTop">
        <div className="container">
          <br />
          <div id="blogPostHeadDiv">
            <div>
              <Link to="/blog">
                <BsArrowLeftCircle size={25} />
              </Link>
            </div>

            <div id="blogPostHeading" className="row">
              <h2>Artificial Intelligence</h2>
            </div>

            <br />
            <div id="blogPostheadDiv2" className="row">
              <p>
                <strong>Contributed by : </strong>Sudhanshu Gupta
              </p>
            </div>
          </div>
        </div>
      </section>

      <div id="space"></div>

      <section id="blogPostBody" style={{ color: "lightblue" }}>
        <div className="container">
          <p>
          True one-to-one customer engagement sounds good in theory, but many marketers aren’t sure how to actually get there. Enter AI. Used wisely, artificial intelligence yields a deeper understanding of customers across different contexts and channels. 

AI can read signals and sense your customer’s unique intent – to purchase, to upgrade, and even to cancel – before she acts. Powered by real-time data, AI can serve up unique, relevant offers automatically, or guide customer-service reps (CSRs) to make the right offer at the right time. In highly regulated industries, AI can also be an invaluable transparency tool to demonstrate why you are presenting particular offers to specific customers and prove that no unconscious bias is at work.
          </p>
          <br/>
          <p>
          AI has the potential to significantly improve the way your organization works, from decision-making to culture to bottom-line benefits. But don’t make the mistake of only applying AI in a few customer use cases, feeding it with data once a week and locking it away from the rest of the company. 

The most compelling success stories come from organizations where AI is fueled by real-time data, delivered across all customer channels, and flexible enough to become more transparent when the situation demands. Getting there means combining several different AI capabilities, including:
          </p>
        </div>
      </section>

      <section id="footer">
        <Footer rel="#blogPostPageTop" />
      </section>
    </>
  );
}

export default blogPost;
