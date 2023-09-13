import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useProduct } from "../../context/ProductContextProvider";

const EditProduct = () => {
  const { addPhone, editPhone, getOnePhone, onePhone } = useProduct();
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");

  const { id } = useParams();

  useEffect(() => {
    getOnePhone(id);
  }, []);

  useEffect(() => {
    if (onePhone) {
      setTitle(onePhone.title);
      setImage(onePhone.image);
      setPrice(onePhone.price);
    }
  }, [onePhone]);

  function editData() {
    let edited = {
      title: title,
      image: image,
      price: price,
    };
    editPhone(id, edited);
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

        <button onClick={editData}>create</button>
      </div>
    </div>
  );
};

export default EditProduct;
