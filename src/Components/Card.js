import "D:/collegeBuddy/collegebuddy/src/Components/ComponentStyle.css";

function Card(props) {
    return (
        <>
            <div className="c">    
                <div className="first">
                    <img id="firstImage" src={props.img} width="100%" height="100%" />
                    <div id="circle">{props.symbol}</div>
                </div> 
                
                <div className="second">
                    <h6>{props.department}</h6>
                    <br/>
                    <div id="btn">
                        <button type="button" className="btn btn-outline-light" style={{height: "35px", marginRight:"4px", borderRadius: "30px"}}>II Year</button>
                        <button type="button" className="btn btn-outline-light" style={{height: "35px", marginRight:"4px", borderRadius: "30px"}}>III Year</button>
                        <button type="button" className="btn btn-outline-light" style={{height: "35px", marginRight:"4px", borderRadius: "30px"}}>IV Year</button>
                    </div>                
                </div>
            </div>
        </>
    );
}

export default Card;