import "./ComponentStyle.css";

function AboutUsCard(props) {
    return (
        <>
            <div id="CardBody">
                <img src={props.profileImage} alt="TopImage" className='profilePic'/>
                <div style={{height:'10px'}}></div>
                <div className="row"><h4>{props.name}</h4></div>
                <div className="row"><h5>CSE Student</h5></div>
            </div>
        </>
    );
}
    
export default AboutUsCard;