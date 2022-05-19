import React, { useState, useEffect } from "react";
import { questions } from "./QueApi";
import "../Components/ComponentStyle.css";
import FAQQue from "./FAQQue";
import Navbar from "./Navbar";
import Footer from "./Footer";

function FAQAccordian() {
  const [data, setData] = useState(questions);

  useEffect(() => {
    document.title = "FAQ";
  }, []);

  return (
    <>
      <section id="FAQPage">
        <div className="container">
          <br />
          <div id="aboutUsHeadDiv" style={{ padding: "20px 10px 40px 10px" }}>
            <Navbar />
            <div id="space"></div>
            <div
              id="aboutheadDiv1"
              className="row"
              style={{ padding: "0 40px 40px 40px" }}
            >
              <h1>FAQ</h1>
            </div>
            <div
              id="aboutheadDiv2"
              className="row"
              style={{ padding: "0 40px 0 40px" }}
            >
              <p>
                FAQ is a place where you can resolve all your doubts, here we
                are providing short query type answer that can help you get your
                doubts resolve related to this platform. Below we have provided
                some common questions so grab them now
              </p>
            </div>
          </div>
        </div>
      </section>
      <section id="QueAns">
        <div id="query" className="container">
          {data.map((currEle) => {
            const { id } = currEle;
            return <FAQQue key={id} {...currEle} />;
          })}
        </div>
      </section>

      <section id="footer">
        <Footer rel="#aboutUsPageTop" />
      </section>
    </>
  );
}

export default FAQAccordian;
