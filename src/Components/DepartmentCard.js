import React from 'react';
import "D:/collegeBuddy/collegebuddy/src/Components/ComponentStyle.css";


function DepartmentCard(props) {
    return (
        <>
            <div className="box">
                {props.logo}
                <p>{props.subHeading}</p>
            </div>                
        </>
    )
}

export default DepartmentCard;
