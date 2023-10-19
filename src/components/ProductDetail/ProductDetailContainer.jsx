import React from "react";
import ProductDescription from "../ProductDescription/ProductDescription";
import "./ProductDetailContainer.css";

const ProductDetailContainer = ({ data }) => {
  return (
    <div className="container my-5">
      <div className="row row-cols-1 row-cols-md-2">
        <div className="col container ">
          <div className="container">
            <img src={data.img} alt="" className="img-product-detail mb-3" />
          </div>
        </div>
        <div className="col container">
          <h3 className="title-product">{data.titulo}</h3>
          <hr />
          <h5 className="code">{data.codigo}</h5>
          <ul className="items-product">
            {data.item1 ? <li>{data.item1}</li> : <></>}
            {data.item2 ? <li>{data.item2}</li> : <></>}
            {data.item3 ? <li>{data.item3}</li> : <></>}
            {data.item4 ? <li>{data.item4}</li> : <></>}
            {data.item5 ? <li>{data.item5}</li> : <></>}
            {data.item6 ? <li>{data.item6}</li> : <></>}
            {data.item7 ? <li>{data.item7}</li> : <></>}
            {data.item8 ? <li>{data.item8}</li> : <></>}
            {data.item9 ? <li>{data.item9}</li> : <></>}
            {data.item10 ? <li>{data.item10}</li> : <></>}
            {data.item11 ? <li>{data.item11}</li> : <></>}
            {data.item12 ? <li>{data.item12}</li> : <></>}
          </ul>
          <span> Venta Únicamente por packs de 12 cajas</span>
          <div className="my-4 container row row-cols-3">
            <div className="col">Precio: ${data.precio}</div>
            <div className="col">
              Cantidad:
              <select class="form-select">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="3">4</option>
                <option value="3">5</option>
              </select>
              <span>(Disponibles {data.stock})</span>
            </div>
            <div className="col">
              <button className="btn btn-primary">Agregar al carrito</button>
            </div>
          </div>
        </div>
      </div>
      <ProductDescription
        description={data.descripcion}
        comments={data.comentarios}
        indications={data.indicaciones}
        classification={data.calificacion}
      />
    </div>
  );
};

export default ProductDetailContainer;
