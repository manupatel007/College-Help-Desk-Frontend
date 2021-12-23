import { BsLinkedin } from 'react-icons/bs';
import { BsInstagram } from 'react-icons/bs';
import { BsTwitter } from 'react-icons/bs';
import { BsArrowUpShort } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import Emoji from 'a11y-react-emoji';

import "./ComponentStyle.css";

function Footer(props) {
    return (
        <>
            <div className="Container">
                <div className="g">
                    <div className="row">
                        <h1><Link to="https://www.linkedin.com"><BsLinkedin size={30} /></Link> <Link to="https://www.linkedin.com"><BsInstagram size={30} /></Link> <Link to="https://www.linkedin.com"><BsTwitter size={30} /></Link></h1>
                    </div>
                    <br/>
                    <div className="row"><h6>Made with <Emoji symbol="💕" label="love" /> by College Book team</h6></div>
                    <div className="row"><p>Copyright 2021 - All right reserved, College Book</p></div>
                </div>
            </div>

            <div className="bottom2Top">
                <div id="arrow"><a href={props.rel}><BsArrowUpShort size={20}/></a></div>
            </div>
        </>
    );
}

export default Footer;