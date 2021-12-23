import './SignUpLogin.css'
import {useNavigate} from 'react-router-dom';

function SignUpLoginPage() {

	const navigate = useNavigate();

	function signup(e) {
		e.preventDefault();
		// console.log(e.target.fhead.value);
		fetch("https://botchat.vishwas007.repl.co/chats/register/phir/", {
		  // Adding method type
		  method: "POST",
	
		  // Adding body or contents to send
		  body: JSON.stringify({
			username: e.target.name.value,
			email: e.target.email.value,
			password: e.target.password.value
		  }),
	
		  // Adding headers to the request
		  headers: {
			"Content-type": "application/json"
		  }
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
			navigate('/');
			// redirect();
		  })
		  // .then(e.target.reset())
		  .catch((error) => console.log(error));
	  }

	  function login(e) {
		e.preventDefault();
		// console.log(e.target.email.value);
		fetch("https://botchat.vishwas007.repl.co/chats/token/", {
		// Adding method type
		method: "POST",

		// Adding body or contents to send
		body: JSON.stringify({
			username: e.target.name.value,
			password: e.target.password.value
		}),

		// Adding headers to the request
		headers: {
			"Content-type": "application/json"
		}
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
				token: json.access
			})
			);
			navigate('/');
		})

		.catch((error) => console.log(error));
	  }

	return (
		<div className="body">
			<div class="main">  	
			<input type="checkbox" id="chk" aria-hidden="true"/>

				<div class="signup">
					<form onSubmit={(e) => signup(e)}>
						<label className="label" for="chk" aria-hidden="true">Sign up</label>
						<input className="input" type="text" name="name" placeholder="User name" required=""/>
						<input className="input" type="email" name="email" placeholder="Email" required=""/>
						<input className="input" type="password" name="password" placeholder="Password" required=""/>
						<button className="button">Sign up</button>
					</form>
				</div>

				<div class="login">
					<form onSubmit={(e) => login(e)}>
						<label className="label" for="chk" aria-hidden="true">Login</label>
						<input className="input" type="text" name="name" placeholder="username" required=""/>
						<input className="input" type="password" name="password" placeholder="Password" required=""/>
						<button className="button">Login</button>
					</form>
				</div>
		</div>
	</div>
	)
}

export default SignUpLoginPage;