import React from 'react'
import "./ComponentStyle.css";

function ResourceCard(props) {
    const navigate = () => {
        window.open(props.url, "_blank");
    }
    return (
        <>
        <br/><br/>
            <div className="container">
                <div className = "row">
                    <div className="blogCard">
                        <div id="blogHeading" className="row">{props.blogheading}</div>
                        <div className="row">
                            <div className="col-lg-7 col-md-7 col-sm-7">{props.blogimage}</div>
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
