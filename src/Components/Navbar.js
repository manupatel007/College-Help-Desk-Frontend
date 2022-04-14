import "./ComponentStyle.css";
import {Link, useNavigate} from 'react-router-dom';
import Info from "../GlobalVars";

import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineTeam } from "react-icons/ai";
import { AiOutlinePicRight } from "react-icons/ai";
import { AiOutlineComment } from "react-icons/ai";
import { AiOutlineCustomerService } from "react-icons/ai";
import { AiOutlineLogin } from "react-icons/ai";


function Navbar() {

    const navigate = useNavigate();

    return (
        <>
            <div className="navbar">
                <nav>
                    <ul>
                        <li onClick={() => navigate('/')}>Home</li>
                        <li onClick={() => navigate('/aboutus')}>About Us</li>
                        <li onClick={() => navigate('/blog')}>Blog</li>
                        <li onClick={() => navigate('/faqcard')}>FAQ</li>
                        <li onClick={() => navigate('/contactus')}>Contact us</li>
                        <li id='ls' onClick={() => navigate('/signup')}>{ Info.islogin? "Hi! "+Info.username : "Login/Signup"  }</li>
                    </ul>

                    <ul id='iconMenu'>
                        <li onClick={() => navigate('/')}><AiOutlineHome size={18}/></li>
                        <li onClick={() => navigate('/aboutus')}><AiOutlineTeam size={18}/></li>
                        <li onClick={() => navigate('/blog')}><AiOutlinePicRight size={18}/></li>
                        <li onClick={() => navigate('/faqcard')}><AiOutlineComment size={18}/></li>
                        <li onClick={() => navigate('/contactus')}><AiOutlineCustomerService size={18}/></li>
                        <li id='ls' onClick={() => navigate('/signup')}>{ Info.islogin? "Hi! "+Info.username : "Login/Signup"  }</li>
                    </ul>
                </nav>                
            </div>
            <div className="LoginImage" onClick={() => navigate('/dashboard')}>
                <img src='./avatar.png' alt="Profile Image" />
            </div>
        </>
    );
}

export default Navbar;