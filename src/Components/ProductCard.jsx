import React from "react";
import ModalDelete from "./ModalDelete";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteProduct } from "../Redux/products/product.action";

function ProductCard({ product }) {
  const navigate = useNavigate();
  const handleClick = (id) => {
    console.log(id);
    navigate(`/product/${id}`);
  };

  return (
    <>
      <div className="single-item">
        <div className="left-set">
          <img width={"200px"} src={product.image} alt="" />
        </div>
        <div className="right-set">
          <div className="productTitle">{product.title}</div>
          <div className="subnamePrice">
            <span>{product.category}</span>
            <span>{product.price}</span>
          </div>
        </div>
        <div className="btns">
          <button className="cartBtn" onClick={() => handleClick(product.id)}>
            Edit
          </button>
          <ModalDelete id={product._id} />
        </div>
      </div>
    </>
  );
}

export default ProductCard;
