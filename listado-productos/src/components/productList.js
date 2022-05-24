import React, { useState } from "react";
import ProductItem from "./productItem";
import data from "../productos.json";

const ProductList = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const keys = ["descripcion", "codigoArticulo"];

  return (
    <div className="mt-5 row">
      <nav className="navbar bg-light">
        <div className="container-fluid">
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Buscar"
              aria-label="Search"
              onChange={(event) => {
                setSearchTerm(event.target.value);
              }}
            />
          </form>
        </div>
      </nav>
      {data
        .filter((val) =>
          keys.some((key) => val[key].toLowerCase().includes(searchTerm))
        )
        .map(({ id, nombre, descripcion, stock, codigoArticulo }) => (
          <div className="col-lg-4 col-md-6 col-sm-12 mt-5" key={id}>
            <ProductItem
              id={id}
              name={nombre}
              descripcion={descripcion}
              stock={stock}
              codigoArticulo={codigoArticulo}
            />
          </div>
        ))}
    </div>
  );
};

export default ProductList;
