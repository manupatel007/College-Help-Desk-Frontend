import React, { useState, useEffect } from 'react';
import "./ComponentStyle.css";
import { Link, useNavigate } from "react-router-dom";
import Info from "../GlobalVars";

import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineTeam } from "react-icons/ai";
import { AiOutlinePicRight } from "react-icons/ai";
import { AiOutlineComment } from "react-icons/ai";
import { AiOutlineCustomerService } from "react-icons/ai";

function Navbar() {
  const [islogin, setIsLogin] = useState(false);
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem('login');
    Info.islogin = false
    Info.username = ""
    navigate('/');
  }

  useEffect(() => {
    // Update the document title using the browser API
    // document.title = `You clicked ${count} times`;
    const updateIt = () => {
    
    if(Info.islogin===true){
        setIsLogin(true);
        setUsername(Info.username)
    }
    
    else if(Info.islogin===false && localStorage.getItem("login")){
        let user = JSON.parse(localStorage.getItem("login"));
        setIsLogin(true);
        setUsername(user.username)
        Info.islogin = true;
        Info.username = user.username;
    }
    }; 
    updateIt();
  });

  const showOptionBox = () => {
    if (document.getElementById("optionsBox").style.display === "none") {
      document.getElementById("optionsBox").style.display = "block";
    } else {
      document.getElementById("optionsBox").style.display = "none";
    }
  };

  return (
    <>
      <div className="navbar">
        <nav>
          <ul>
            <li onClick={() => navigate("/")}>Home</li>
            <li onClick={() => navigate("/aboutus")}>About Us</li>
            <li onClick={() => navigate("/blog")}>Blog</li>
            <li onClick={() => navigate("/faq")}>FAQ</li>
            <li onClick={() => navigate("/contactus")}>Contact us</li>
            {
              islogin?(<li id="ls" onClick={() => navigate("/dashboard")}>
                {Info.islogin ? "Hi! " + Info.username : "Login/Signup"}
              </li>):(
                <li id="ls" onClick={() => navigate("/signup")}>
                  Login/Signup
                </li>
              )
            }
          </ul>

          <ul id="iconMenu">
            <li onClick={() => navigate("/")}>
              <AiOutlineHome size={18} />
            </li>
            <li onClick={() => navigate("/aboutus")}>
              <AiOutlineTeam size={18} />
            </li>
            <li onClick={() => navigate("/blog")}>
              <AiOutlinePicRight size={18} />
            </li>
            <li onClick={() => navigate("/faq")}>
              <AiOutlineComment size={18} />
            </li>
            <li onClick={() => navigate("/contactus")}>
              <AiOutlineCustomerService size={18} />
            </li>
            {
              islogin?(<li id="ls" onClick={() => navigate("/dashboard")}>
                {Info.islogin ? "Hi! " + Info.username : "Login/Signup"}
              </li>):(
                <li id="ls" onClick={() => navigate("/signup")}>
                  Login/Signup
                </li>
              )
            }
          </ul>
        </nav>
      </div>

      <div className="LoginImage" onClick={showOptionBox}>
        <img src="./avatar.png" id="loginImage" alt="ProfileImage" />

        {
          islogin ? (
            <div className="optionBox" id="optionsBox">
              <Link to="/dashboard">Dashboard</Link>
              <hr style={{ margin: "4px 0 3px 0" }} />
              <Link to="/discuss">Discussion Forum</Link>
              <hr style={{ margin: "4px 0 3px 0" }} />
              <span onClick={logout}>Logout</span>
            </div>
          ):(
            <div className="optionBox" id="optionsBox">
              <Link to="/signup">Login</Link>
            </div>
          )
        }
      </div>
    </>
  );
}

export default Navbar;
