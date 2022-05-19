import React, { useEffect } from "react";
import "./App.css";
import { Link } from "react-router-dom";

function Error404Page() {
  useEffect(() => {
    document.title = "Error 404";
  }, []);

  return (
    <>
      <div id="errorCont" className="container">
        <img src="./ErrorImg.png" alt="error" />
      </div>
      <div className="errorBtn">
        <Link to="/">Go to Home</Link>
      </div>
    </>
  );
}

export default Error404Page;
