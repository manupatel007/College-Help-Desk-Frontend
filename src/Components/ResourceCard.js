import React from 'react'
import "./ComponentStyle.css";

import { useState } from "react";

function ResourceCard(props) {
    const navigate = () => {
        window.open(props.url, "_blank");
    }
    // var status = props.status;
    const [status, setStatus] = useState(props.status);
    const valueee = JSON.parse(localStorage.getItem("login"));

    function makeFavourite(){
        console.log(props.id, "yyy");
        fetch("https://collegebackenc.herokuapp.com/chats/favourite/", {
        method: "POST",
        body: JSON.stringify({
            resourceId: props.uniqueid
        }),
        headers: {
            "Content-type": "application/json",
            Authorization: "Bearer " + valueee.token
        }
        })
        .then((response) => {
            return response.json();
        })

        // Displaying results to console
        .then((json) => {
            console.log(json);
            setStatus(true);
            // console.log(resources);
        })
        // .then(() => {
        //     console.log(resources);
        // })
        .catch((error) => console.log(error));
    }

    return (
        <>
        
            <div className="container">
                <div className = "row">
                    <div className="blogCard">
                        <div id="blogHeading" className="row">{props.blogheading}</div>
                        <div className="row">
                            <div className="col-lg-4 col-md-4 col-sm-4">
                                {status === false ? <button type="button" id="readBtn" class="btn btn-light" onClick={() => makeFavourite()}>Save</button> : <button type="button" id="readBtn" class="btn btn-light">Saved..</button>}
                                
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-3"></div>
                            <div id="blogContent" className="col-lg-5 col-md-5 col-sm-5">
                                <p>{props.subject}</p>
                                <button type="button" id="readBtn" class="btn btn-light" onClick={() => navigate()}>Download</button>
                            </div>
                        </div>
                    </div> 
                </div>                
            </div>
        </>
    )
}

export default ResourceCard;
