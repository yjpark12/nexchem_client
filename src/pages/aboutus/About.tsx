import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { StEmpty } from "./StAbout";

const About: React.FC = () => {
  return (
    <>
      <Header />
      <StEmpty />
      <Outlet />
      <Footer />
    </>
  );
};

export default About;
