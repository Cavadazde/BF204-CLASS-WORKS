import React from "react";
import './index.scss';

const Courses = ({ data }) => {
  return (
    <div className="container">
      <div className="row">
        {data &&
          data.map((q, idx) => {
            return (
              <div className="col">
                <div className="card" key={idx}>
                  <img
                    className="card-img-top"
                    src={q.img}
                    alt="Card image cap"
                  />
                  <div className="card-body">
                    <h5 className="card-title">{q.name}</h5>
                    <p className="card-text">
                      {q.price} $
                    </p>
                    <a href="#" className="btn btn-primary">
                     Delete
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Courses;
