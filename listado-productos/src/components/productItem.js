import React, { useState } from "react";

const ProductItem = (props) => {
  const { name, descripcion, stock, id, codigoArticulo } = props;

  return (
    <div className="card mb-3" style={{ maxWidth: "540p" }}>
      <div className="row g-0">
        <div className="col-md-4">
          <img
            src={`./img/products/${id}.jpg`}
            className="img-fluid rounded-start"
            alt="..."
          />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <p className="card-text">{descripcion}</p>
            <p className="card-text">{codigoArticulo}</p>
            <p className="card-text">
              <small className="text-muted">Stock: {stock}</small>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
