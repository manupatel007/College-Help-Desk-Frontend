import "./ComponentStyle.css";
import {Link, useNavigate} from 'react-router-dom';
import Info from "../GlobalVars";

function Navbar() {

    const navigate = useNavigate();

    return (
        <>
            <div class="navbar">
                <nav>
                    <ul>
                        <li onClick={() => navigate('/')}>Home</li>
                        <li onClick={() => navigate('/aboutus')}>About Us</li>
                        <li onClick={() => navigate('/blog')}>Blog</li>
                        <li onClick={() => navigate('/')}>FAQ</li>
                        <li onClick={() => navigate('/contactus')}>Contact us</li>
                        <li id='ls' onClick={() => navigate('/signup')}>{ Info.islogin? "Hi! "+Info.username : "Login/Signup"  }</li>
                    </ul>
                </nav>
            </div>
        </>
    );
}

export default Navbar;