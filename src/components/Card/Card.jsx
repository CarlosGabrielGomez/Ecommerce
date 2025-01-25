/* eslint-disable react/prop-types */
// import { Button } from "../Button/Button";
// import { Image } from "../Image/Image";
// import { Body } from "../Body/Body";
import "./Card.css";

const Card = ({ source, description, title, price }) => {
  return (
    <div className="container">
      <div className="card  border-dark mb-3 ">
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src={source}
              className="img-fluid rounded-start"
              alt={description}
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{title}</h5>
              <p className="card-text">{description}</p>
              <p className="card-text">
                <small className="fw-bolder fs-4"> $  {price}</small>
              </p>
              <button type="button" className="btn btn-secondary btn-dark btn-lg">Comprar</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Card };
