import React from "react";

import ProductForm from "../Components/ProuctForm";
import { updateProduct } from "../Redux/products/product.action";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

function EditProduct() {
  const { id } = useParams();
  const { data } = useSelector((store) => {
    return store.products;
  });
  const singleData = data.find((el) => el.id == id);

  return (
    <>
      <ProductForm
        data={singleData}
        id={singleData._id}
        handleDispatch={updateProduct}
      />
    </>
  );
}

export default EditProduct;
