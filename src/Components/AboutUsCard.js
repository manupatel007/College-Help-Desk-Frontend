import "./ComponentStyle.css";

function AboutUsCard(props) {
    return (
        <>
            <div id="CardBody">
                <img src={props.profileImage} alt="TopImage" className='profilePic'/>
                <div style={{height:'10px'}}></div>
                <div className="row"><a href={props.socialLink} target="_blank" rel="nofollow noopener noreferrer"><h4>{props.name}</h4></a></div>
                <div className="row"><h5>CSE Student</h5></div>
            </div>
        </>
    );
}
    
export default AboutUsCard;