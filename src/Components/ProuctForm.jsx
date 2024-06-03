import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useToast } from "@chakra-ui/react";
const intial = {
  id: Math.random() + 1,
  title: "",
  price: 0,
  description: "",
  category: "",
  image: "",
  rating: {
    rate: "",
    count: "",
  },
};
const ProductForm = ({ data, handleDispatch, id }) => {
  const [formData, setFormData] = useState(data || intial);
  const toast = useToast();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const dispatch = useDispatch();
  const navigate = useNavigate("/");
  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(handleDispatch(formData, id));
    if (data) {
      toast({
        title: "Product Updated",
        description: "product Updated successfully",
        status: "success",
        duration: 9000,
        isClosable: true,
      });
    } else {
      toast({
        title: "Product Added",
        description: "Product Added Successfully",
        status: "success",
        duration: 9000,
        isClosable: true,
      });
    }
    navigate("/");
  };

  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <div>
          <div>
            {" "}
            <label htmlFor="title">Title:</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
            />
          </div>

          <div>
            <label htmlFor="price">Price:</label>
            <input
              type="number"
              name="price"
              value={formData.price}
              onChange={handleChange}
            />
          </div>

          <div>
            {" "}
            <label htmlFor="description">Description:</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
            />
          </div>

          <div>
            <label htmlFor="category">Category:</label>
            <input
              type="text"
              name="category"
              value={formData.category}
              onChange={handleChange}
            />
          </div>

          <div>
            <label htmlFor="image">Image:</label>
            <input
              type="text"
              name="image"
              value={formData.image}
              onChange={handleChange}
            />
          </div>

          <div>
            {" "}
            <label htmlFor="ratingRate">Rating Rate:</label>
            <input
              type="number"
              name="rating.rate"
              value={formData.rating.rate}
              onChange={handleChange}
            />
          </div>

          <div>
            <label htmlFor="ratingCount">Rating Count:</label>
            <input
              type="number"
              name="rating.count"
              value={formData.rating.count}
              onChange={handleChange}
            />
          </div>
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ProductForm;
