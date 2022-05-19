import React from "react";
import { useEffect, useState } from "react";
import "./App.css";
import Footer from "./Components/Footer";
import ResourceCard from "./Components/ResourceCard";

import { useLocation } from "react-router-dom";
import Navbar from "./Components/Navbar";
import MaterialResourceCard from "./Components/MaterialResourceCard";

function Resource() {
  const location = useLocation();
  const [resources, setResources] = useState([]);
  const branch = location.state.branch;
  const resourceId = location.state.resourceId;
  const year = location.state.year;
  const heading = location.state.heading;
  const valueee = JSON.parse(localStorage.getItem("login"));

  function getResource() {
    if (valueee) {
      var headerObj = {
        "Content-type": "application/json",
        Authorization: "Bearer " + valueee.token,
      };
    } else {
      var headerObj = {
        "Content-type": "application/json",
      };
    }

    fetch("https://collegebackenc.herokuapp.com/chats/resource/", {
      method: "POST",
      body: JSON.stringify({
        branch: branch,
        year: year,
        resourceId: resourceId,
      }),
      headers: headerObj,
    })
      .then((response) => {
        return response.json();
      })

      // Displaying results to console
      .then((json) => {
        console.log(json);
        setResources([...json]);
        // console.log(resources);
      })
      // .then(() => {
      //     console.log(resources);
      // })
      .catch((error) => console.log(error));
  }

  useEffect(() => {
    getResource();
  }, []);

  useEffect(() => {
    document.title = "Study resource";
  }, []);

  return (
    <>
      <section id="blogPageTop">
        <div className="container">
          <br />
          <div id="blogHeadDiv" style={{ padding: "40px" }}>
            <Navbar />
            <div id="space"></div>
            <div id="blogHeading" className="row">
              <h1>{heading}</h1>
            </div>
          </div>
        </div>
      </section>

      <section id="blogCardSec">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12">
              {resources.length > 0 &&
                resources.map((resource, i) => {
                  return (
                    <ResourceCard
                      blogheading={resource.name}
                      blogimage
                      blogdescription="Machine Learning is a subset of Artificial Intelligence (AI)."
                      url={resource.url}
                      subject={resource.subject}
                      status={resource.user_liked}
                    />
                  );
                })}
            </div>
          </div>
        </div>
      </section>

      <section id="footer">
        <Footer rel="#blogPageTop" />
      </section>
    </>
  );
}

export default Resource;
