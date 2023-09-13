import React, { useState } from "react";
import { useProduct } from "../../context/ProductContextProvider";

const AddProduct = () => {
  const { addPhone } = useProduct();
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");

  function handleChange() {
    let obj = {
      title: title,
      image: image,
      price: price,
    };
    addPhone(obj);
  }
  return (
    <div className="inp">
      <div className="input1">
        <div>
          <input type="text" onChange={(e) => setTitle(e.target.value)} />
        </div>
        <div>
          <input type="text" onChange={(e) => setImage(e.target.value)} />
        </div>
        <div>
          <input type="text" onChange={(e) => setPrice(e.target.value)} />
        </div>

        <button onClick={handleChange}>create</button>
      </div>
    </div>
  );
};

export default AddProduct;
