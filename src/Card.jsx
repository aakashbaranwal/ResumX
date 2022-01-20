import React from "react";
import { NavLink } from "react-router-dom";

function Card({ title, imgsrc }) {
  return (
    <>
      <div className="col-md-4 col-10 mx-auto">
        <div className="card">
          <img src={imgsrc} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">
              Let us know you're interested and our team will reach out to you.
              Click here for more information!
            </p>
            <NavLink to="/contact" className="btn btn-primary">
              Get Quote
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
