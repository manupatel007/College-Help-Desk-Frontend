import React from "react";
import "./App.css";
import Footer from "./Components/Footer";
import { useEffect, useState } from "react";
import Navbar from "./Components/Navbar";

function Dashboard() {
  const [favs, setFavs] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const valueee = JSON.parse(localStorage.getItem("login"));

  function getProfile() {
    fetch("https://collegebackenc.herokuapp.com/chats/profile/", {
      headers: {
        Authorization: "Bearer " + valueee.token,
      },
    })
      .then((response) => {
        return response.json();
      })

      // Displaying results to console
      .then((json) => {
        console.log(json);
        setFavs([...json.favourites]);
        setName(json.data.username);
        setEmail(json.data.email);
        // console.log(resources);
      })
      // .then(() => {
      //     console.log(resources);
      // })
      .catch((error) => console.log(error));
  }

  useEffect(() => {
    getProfile();
  }, []);

  return (
    <>
      <section id="Dashboard">
        <div className="container">
          <div
            id="dashHeading"
            className="row"
            style={{
              textAlign: "center",
              marginTop: "50px",
              marginBottom: "20px",
            }}
          >
            <Navbar />
            <div id="space"></div>
            <div className="dashHead">
              <h1>Dashboard</h1>
            </div>
          </div>
          <div id="panel" className="row">
            <div className="dashIcon">
              <img src="./avatar.png" alt="avtar" />
            </div>
            <div className="dashName">
              <h2>{name}</h2>
              <p>{email}</p>
            </div>
          </div>
          <div id="saveAndBookmark" className="row">
            <div id="saveItem" className="col-lg-9 col-md-12 col-sm-12">
              <h4>Saved Resources</h4>
              {favs.length > 0 &&
                favs.map((fav, i) => {
                  return (
                    <p>
                      {">"} {fav.name}
                    </p>
                  );
                })}
            </div>
            <div id="bookmarkItem" className="col-lg-3 col-md-12 col-sm-12">
              <h5>Bookmark Subjects</h5>
              <p>Database Management System</p>
              <p>Software Engineering</p>
            </div>
          </div>
        </div>
      </section>

      <section id="footer">
        <Footer rel="#Dashboard" />
      </section>
    </>
  );
}

export default Dashboard;
