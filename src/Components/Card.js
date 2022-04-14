import "./ComponentStyle.css";
import {Link, useNavigate} from 'react-router-dom';

function Card(props) {

    const navigate = useNavigate();

    const toDept=(e,year)=>{
        console.log(e.target.id, year);
        navigate('/Dep',{state:{id:e.target.id,year:year}});
    }

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
                        <button type="button" id={props.depid} onClick={(e)=>{toDept(e,2)}} className="btn btn-outline-light" style={{height: "35px", marginRight:"4px", borderRadius: "30px"}}>II Year</button>
                        <button type="button" id={props.depid} onClick={(e)=>{toDept(e,3)}} className="btn btn-outline-light" style={{height: "35px", marginRight:"4px", borderRadius: "30px"}}>III Year</button>
                        <button type="button" id={props.depid} onClick={(e)=>{toDept(e,4)}} className="btn btn-outline-light" style={{height: "35px", marginRight:"4px", borderRadius: "30px"}}>IV Year</button>
                    </div>                
                </div>
            </div>
        </>
    );
}

export default Card;