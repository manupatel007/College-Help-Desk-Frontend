import React, { useEffect } from "react";
import "./App.css";
import DepartmentCard from "./Components/DepartmentCard";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import {
  AiOutlineCluster,
  AiOutlineFileMarkdown,
  AiOutlineFilePpt,
  AiOutlineBook,
  AiOutlineFileText,
  AiOutlineDesktop,
} from "react-icons/ai";
import Info from "./GlobalVars";
import { useNavigate, useLocation } from "react-router-dom";

function DepartmentPage() {
  const navigate = useNavigate();
  const location = useLocation();

  const toResource = (id, heading) => {
    navigate("/resource", {
      state: {
        resourceId: id,
        branch: location.state.id,
        year: location.state.year,
        heading: heading,
      },
    });
  };

  useEffect(() => {
    document.title = "Department";
  }, []);

  return (
    <>
      <br />
      <div className="container">
        <div id="departmentHeadDiv" className="row">
          <Navbar />
          <div id="space"></div>
          <h1>
            {Info[location.state.id].title} ({Info[location.state.year]})
          </h1>
          <div id="space"></div>
          <p>{Info[location.state.id].description}</p>
          <p>
            There are various courses and degree programmes similar to computer
            science courses. The major difference between these courses is the
            application of the core subjects and their functionalities used
            during the industrial experience.
          </p>
        </div>

        <div className="row">
          <div
            className="col-lg-4 col-md-4 col-sm-12"
            id="0"
            onClick={() => toResource(0, "Syllabus")}
          >
            <DepartmentCard
              logo={
                <AiOutlineCluster
                  size="50px"
                  color="lightgray"
                  style={{
                    display: "flex",
                    margin: "auto",
                    marginBottom: "20px",
                  }}
                />
              }
              subHeading="Syllabus"
            />
          </div>
          <div
            className="col-lg-4 col-md-4 col-sm-12"
            id="1"
            onClick={() => toResource(1, "Mid Term Papers")}
          >
            <DepartmentCard
              logo={
                <AiOutlineFileMarkdown
                  size="50px"
                  color="lightgray"
                  style={{
                    display: "flex",
                    margin: "auto",
                    marginBottom: "20px",
                  }}
                />
              }
              subHeading="Mid Term Papers"
            />
          </div>
          <div
            className="col-lg-4 col-md-4 col-sm-12"
            id="2"
            onClick={() => toResource(2, "RTU Papers")}
          >
            <DepartmentCard
              logo={
                <AiOutlineFilePpt
                  size="50px"
                  color="lightgray"
                  style={{
                    display: "flex",
                    margin: "auto",
                    marginBottom: "20px",
                  }}
                />
              }
              subHeading="RTU Papers"
            />
          </div>
        </div>

        <div className="row">
          <div
            className="col-lg-4 col-md-4 col-sm-12"
            id="3"
            onClick={() => toResource(3, "Reference Books")}
          >
            <DepartmentCard
              logo={
                <AiOutlineBook
                  size="50px"
                  color="lightgray"
                  style={{
                    display: "flex",
                    margin: "auto",
                    marginBottom: "20px",
                  }}
                />
              }
              subHeading="Reference Books"
            />
          </div>
          <div
            className="col-lg-4 col-md-4 col-sm-12"
            id="4"
            onClick={() => toResource(4, "Subject Notes")}
          >
            <DepartmentCard
              logo={
                <AiOutlineFileText
                  size="50px"
                  color="lightgray"
                  style={{
                    display: "flex",
                    margin: "auto",
                    marginBottom: "20px",
                  }}
                />
              }
              subHeading="Subject Notes"
            />
          </div>
          <div
            className="col-lg-4 col-md-4 col-sm-12"
            id="5"
            onClick={() => toResource(5, "Video Lectures")}
          >
            <DepartmentCard
              logo={
                <AiOutlineDesktop
                  size="50px"
                  color="lightgray"
                  style={{
                    display: "flex",
                    margin: "auto",
                    marginBottom: "20px",
                  }}
                />
              }
              subHeading="Video Lectures"
            />
          </div>
        </div>
      </div>

      <section id="footer">
        <Footer rel="#aboutUsPageTop" />
      </section>
    </>
  );
}

export default DepartmentPage;
