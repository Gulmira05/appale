import React from "react";
import AddProduct from "./../components/AddProduct/AddProduct";
import ListProduct from "./../components/ListProduct/ListProduct";
import { Route, Routes } from "react-router-dom";
import NotFoundPage from "../components/NotFoundPage/NotFoundPage";
import EditProduct from "../components/EditProduct/EditProduct";

const MainRoutes = () => {
  const PUBLIC = [
    { link: "/add", element: <AddProduct />, id: 1 },
    { link: "/list", element: <ListProduct />, id: 2 },
    { link: "*", element: <NotFoundPage />, id: 3 },
    { link: "/edit:id", element: <EditProduct />, id: 4 },
  ];
  return (
    <Routes>
      {PUBLIC.map((el) => (
        <Route path={el.link} element={el.element} key={el.id} />
      ))}
    </Routes>
  );
};

export default MainRoutes;
