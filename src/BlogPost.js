import React from "react";
import "./App.css";
import Footer from "./Components/Footer";
import image1 from "./photo/BG.png";
import { BsArrowLeftCircle } from "react-icons/bs";

function blogPost() {
  return (
    <>
      <section id="blogPostPageTop"></section>

      <div id="space"></div>
      <section id="footer">
        <Footer rel="#blogPostPageTop" />
      </section>
    </>
  );
}

export default blogPost;
