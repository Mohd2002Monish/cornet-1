import React from "react";
import { Route, Routes } from "react-router-dom";
import Products from "../Pages/Products";
import AddProduct from "../Pages/AddProduct";
import EditProduct from "../Pages/EditProduct";

function AllRoutes() {
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <>
              {" "}
              <Products />
            </>
          }
        />
        <Route
          path="/add-product"
          element={
            <>
              <AddProduct />
            </>
          }
        />

        <Route
          path="/product/:id"
          element={
            <>
              <EditProduct />
            </>
          }
        />
      </Routes>
    </div>
  );
}

export default AllRoutes;
