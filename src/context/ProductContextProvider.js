import axios from "axios";
import React, { createContext, useContext, useState } from "react";
export const productContext = createContext();
export const useProduct = () => {
  return useContext(productContext);
};
const ProductContextProvider = ({ children }) => {
  const API = "http://localhost:3000/phone";

  const [data, setData] = useState([]);
  const [onePhone, setOnePhone] = useState([]);

  async function addPhone(newPhone) {
    await axios.post(API, newPhone);
  }
  async function getPhone() {
    let { data } = await axios(API);
    setData(data);
  }
  async function delPhone(id) {
    await axios.delete(`${API}/${id}`);
    getPhone();
  }
  async function editPhone(id, editedPhone) {
    await axios.patch(`${API}/${id}`, editedPhone);
    getPhone();
  }
  async function getOnePhone(id) {
    let { data } = await axios(`${API}/${id}`);
    setOnePhone(data);
  }
  const values = {
    addPhone,
    data,
    getPhone,
    delPhone,
    editPhone,
    getOnePhone,
    onePhone,
  };
  return (
    <productContext.Provider value={values}>{children}</productContext.Provider>
  );
};

export default ProductContextProvider;
