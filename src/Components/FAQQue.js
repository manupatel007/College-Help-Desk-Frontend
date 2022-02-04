import React from 'react';
import { useState } from 'react';
import '../Components/ComponentStyle.css'

function FAQQue({question, answer}) {
    const [show, setShow] = useState(false);
  return(
    <>
        <div className="que">
            <p data-toggle="tooltip" data-placement="top" title="Click on me" onClick={() => setShow(!show)}>{show ? "😇" : "🤔" }</p>
            <h6>{question}</h6>
        </div>
        {
            show && <p className='answer'>{answer}</p>
        }        
    </>
  );
}

export default FAQQue;
