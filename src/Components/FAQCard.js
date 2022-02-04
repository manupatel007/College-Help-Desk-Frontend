import React from 'react';

function FAQCard() {
  return (
    <>
      <div className="accordion" id="accordionExample">
        <div className="card">
          <div className="card-header" id="headingOne">
            <h2 className="mb-0">
              <button className="btn btn-link font-weight-700 text-white text-decoration-none" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                How Can I grab my book pdf ?
              </button>
            </h2>
          </div>      
          <div id="collapseOne" className="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
            <div className="card-body">
              You can simply download it from that page by clicking the download button.
            </div>
          </div>
        </div>

        <div className="card">
          <div className="card-header" id="headingOne">
            <h2 className="mb-0">
              <button className="btn btn-link font-weight-700 text-white text-decoration-none" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                How Can I grab my book pdf ?
              </button>
            </h2>
          </div>      
          <div id="collapseOne" className="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
            <div className="card-body">
              You can simply download it from that page by clicking the download button.
            </div>
          </div>
        </div>

        <div className="card">
          <div className="card-header" id="headingOne">
            <h2 className="mb-0">
              <button className="btn btn-link font-weight-700 text-white text-decoration-none" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                How Can I grab my book pdf ?
              </button>
            </h2>
          </div>      
          <div id="collapseOne" className="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
            <div className="card-body">
              You can simply download it from that page by clicking the download button.
            </div>
          </div>
        </div>

      </div>
    </>
  );
}

export default FAQCard;
