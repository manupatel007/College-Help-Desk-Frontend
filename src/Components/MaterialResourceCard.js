import React from "react";
import { BsDownload } from "react-icons/bs";
import { BsStar } from "react-icons/bs";

function MaterialResourceCard({ subject, year }) {
  return (
    <>
      <div className="materialCardBody">
        <h6>{subject}</h6>
        <p>{year}</p>
        <div className="groupBtn">
          <button
            type="button"
            data-toggle="tooltip"
            data-placement="down"
            title="Download"
          >
            <BsDownload size={15} />
          </button>
          <button
            type="button"
            data-toggle="tooltip"
            data-placement="down"
            title="Save"
          >
            <BsStar size={15} />
          </button>
        </div>
      </div>
    </>
  );
}

export default MaterialResourceCard;
