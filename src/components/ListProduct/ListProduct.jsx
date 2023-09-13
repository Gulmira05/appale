import React, { useEffect } from "react";
import { useProduct } from "../../context/ProductContextProvider";
import { useNavigate, useParams } from "react-router-dom";

const ListProduct = () => {
  let { getPhone, data, delPhone } = useProduct();
  const { id } = useParams();
  useEffect(() => {
    getPhone();
  }, []);
  const navigate = useNavigate();

  return (
    <div>
      {data.map((el) => (
        <div key={id}>
          <h1>{el.title}</h1>
          <button onClick={() => delPhone(el.id)}>Delete</button>
          <button onClick={() => navigate(`/edit/${el.id}`)}>Edit</button>
        </div>
      ))}
    </div>
  );
};

export default ListProduct;
