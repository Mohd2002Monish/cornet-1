import React from "react";
import ProductForm from "../Components/ProuctForm";

import { addProduct } from "../Redux/products/product.action";

function AddProduct() {
  return (
    <div>
      <ProductForm handleDispatch={addProduct} />
    </div>
  );
}

export default AddProduct;
