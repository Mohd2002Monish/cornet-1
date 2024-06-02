import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "../Components/ProductCard";
import { getAllProducts } from "../Redux/products/product.action";

function Products() {
  const { data } = useSelector((store) => {
    return store.products;
  });
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllProducts(""));
  }, [dispatch]);

  return (
    <div className="grid">
      {data.map((el) => {
        return <ProductCard product={el} />;
      })}
    </div>
  );
}

export default Products;
