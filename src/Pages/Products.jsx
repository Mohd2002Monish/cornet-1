import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "../Components/ProductCard";
import { getAllProducts } from "../Redux/products/product.action";
import { Center } from "@chakra-ui/react";

function Products() {
  const { data, AllProducts } = useSelector((store) => {
    return store.products;
  });
  const load = useSelector((store) => {
    return store.products;
  });
  console.log(load);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllProducts(""));
  }, [dispatch]);

  return (
    <>
      {AllProducts.loading ? (
        <Center>Loading</Center>
      ) : (
        <div className="grid">
          {data.map((el) => {
            return <ProductCard product={el} />;
          })}
        </div>
      )}
    </>
  );
}

export default Products;
