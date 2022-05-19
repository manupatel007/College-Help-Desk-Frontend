import { useEffect } from "react";
import "./SignUpLogin.css";
import { useNavigate, Link } from "react-router-dom";
import Info from "./GlobalVars";

function SignUpLoginPage() {
  const navigate = useNavigate();

  function signup(e) {
    e.preventDefault();
    // console.log(e.target.fhead.value);
    fetch("https://collegebackenc.herokuapp.com/chats/register/phir/", {
      // Adding method type
      method: "POST",

      // Adding body or contents to send
      body: JSON.stringify({
        username: e.target.name.value,
        email: e.target.email.value,
        password: e.target.password.value,
      }),

      // Adding headers to the request
      headers: {
        "Content-type": "application/json",
      },
    })
      // Converting to JSON
      .then((response) => {
        console.log(response.status);
        if (!response.ok) {
          throw Error(response);
        }
        return response.json();
      })

      // Displaying results to console
      .then((json) => {
        console.log(json);
        navigate("/");
        // redirect();
      })
      // .then(e.target.reset())
      .catch((error) => console.log(error));
  }

  function login(e) {
    e.preventDefault();
    // console.log(e.target.email.value);
    fetch("https://collegebackenc.herokuapp.com/chats/token/", {
      // Adding method type
      method: "POST",

      // Adding body or contents to send
      body: JSON.stringify({
        username: e.target.name.value,
        password: e.target.password.value,
      }),

      // Adding headers to the request
      headers: {
        "Content-type": "application/json",
      },
    })
      // Converting to JSON
      .then((response) => {
        console.log(response.status);
        if (!response.ok) {
          throw Error(response);
        }
        return response.json();
      })

      // Displaying results to console
      .then((json) => {
        console.log(json);
        // if (!json.ok) {
        //   throw Error(json);
        // }
        localStorage.setItem(
          "login",
          JSON.stringify({
            login: true,
            token: json.access,
            username: e.target.name.value,
          })
        );
        Info.islogin = true;
        Info.username = e.target.name.value;
        navigate("/");
      })

      .catch((error) => console.log(error));
  }

  useEffect(() => {
    document.title = "Login/Signup";
  }, []);

  return (
    <>
      <div className="body">
        <div class="main">
          <input type="checkbox" id="chk" aria-hidden="true" />

          <div class="signup">
            <form onSubmit={(e) => signup(e)}>
              <label className="label" for="chk" aria-hidden="true">
                Sign Up
              </label>
              <input
                className="input"
                type="text"
                name="name"
                placeholder="Username"
                required=""
                style={{ fontSize: "15px" }}
              />
              <input
                className="input"
                type="email"
                name="email"
                placeholder="Email"
                required=""
                style={{ fontSize: "15px" }}
              />
              <input
                className="input"
                type="password"
                name="password"
                placeholder="Password"
                required=""
                style={{ fontSize: "15px" }}
              />
              <button className="button">SIGN UP</button>
            </form>
          </div>

          <div class="login">
            <form onSubmit={(e) => login(e)}>
              <label className="label" for="chk" aria-hidden="true">
                Log In
              </label>
              <input
                className="input"
                type="text"
                name="name"
                placeholder="Username"
                required=""
                style={{ fontSize: "15px" }}
              />
              <input
                className="input"
                type="password"
                name="password"
                placeholder="Password"
                required=""
                style={{ fontSize: "15px" }}
              />
              <button className="button">LOGIN</button>
            </form>
          </div>
        </div>
      </div>

      <div className="signUpPageBtn">
        <Link to="/">
          <button type="button">Home</button>
        </Link>
      </div>
    </>
  );
}

export default SignUpLoginPage;
