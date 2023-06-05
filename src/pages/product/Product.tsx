import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../../components/Header";
import { StEmpty } from "../aboutus/StAbout";
import Footer from "../../components/Footer";

const Product: React.FC = () => {
  return (
    <>
      <Header />
      <StEmpty />
      <Outlet />
      <Footer />
    </>
  );
};

export default Product;
