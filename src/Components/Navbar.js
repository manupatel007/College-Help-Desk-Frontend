import "./ComponentStyle.css";
import { Link, useNavigate } from "react-router-dom";
import Info from "../GlobalVars";

import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineTeam } from "react-icons/ai";
import { AiOutlinePicRight } from "react-icons/ai";
import { AiOutlineComment } from "react-icons/ai";
import { AiOutlineCustomerService } from "react-icons/ai";

function Navbar() {
  const navigate = useNavigate();

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
            <li id="ls" onClick={() => navigate("/signup")}>
              {Info.islogin ? "Hi! " + Info.username : "Login/Signup"}
            </li>
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
            <li id="ls" onClick={() => navigate("/signup")}>
              {Info.islogin ? "Hi! " + Info.username : "Login/Signup"}
            </li>
          </ul>
        </nav>
      </div>

      <div className="LoginImage" onClick={showOptionBox}>
        <img src="./avatar.png" id="loginImage" alt="ProfileImage" />

        <div className="optionBox" id="optionsBox">
          <Link to="/">Dashboard</Link>
          <hr style={{ margin: "4px 0 3px 0" }} />
          <Link to="/discuss">Discussion Forum</Link>
        </div>
      </div>
    </>
  );
}

export default Navbar;
