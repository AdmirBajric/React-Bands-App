import React from "react";

import styles from "./Band.module.css";

const Band = (props) => {
  const { img_url, info, name } = props.band;
  return (
    <div className="card mt-3">
      <div className="card-header bg-dark text-light">
        <h3>{name}</h3>
      </div>
      <div className="card-body">
        <div className="row">
          <div className="col-6">
            <img src={img_url} alt={name} className={styles.mainThumb} />
          </div>
          <div className="col-6">
            <p className="card-text">{info.substr(0, 300)} ...</p>
          </div>
        </div>
      </div>
      <div className="card-footer bg-dark ">
        <button
          className="btn btn-secondary float-right"
          onClick={() => props.handleChangeBand(props.band)}
        >
          Read more ...
        </button>
      </div>
    </div>
  );
};

export default Band;
