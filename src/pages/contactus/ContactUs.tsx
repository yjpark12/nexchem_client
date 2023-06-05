import React from "react";
import { StEmpty } from "../aboutus/StAbout";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Outlet } from "react-router";

const ContactUs: React.FC = () => {
  return (
    <>
      <Header />
      <StEmpty />
      <Outlet />
      <Footer />
    </>
  );
};

export default ContactUs;
