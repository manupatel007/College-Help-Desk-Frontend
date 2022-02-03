import React from 'react';
import './App.css';

function Error404Page() {
  return (
    <>
        <div id='errorCont' className="container">
            <img src='./ErrorImg.png' alt='error' />    
        </div>
        <div className="errorBtn">
            <button type='button'>Go to Home</button>
        </div>
    </>
  );
}

export default Error404Page;
