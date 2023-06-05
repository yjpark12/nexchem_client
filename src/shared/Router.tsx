import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Intro from "../pages/main/Intro";
import About from "../pages/aboutus/About";
import AboutRelation from "../pages/aboutus/AboutRelation";
import AboutPrice from "../pages/aboutus/AboutPrice";
import AboutBrand from "../pages/aboutus/AboutBrand";
import Product from "../pages/product/Product";
import Noshine from "../pages/product/Noshine";
import Redchec from "../pages/product/Redchec";
import Multi from "../pages/product/technical/Multi";
import Fresh from "../pages/product/technical/Fresh";
import Air from "../pages/product/technical/Air";
import Water from "../pages/product/technical/Water";
import Build from "../pages/product/technical/Build";
import Media from "../pages/media/Media";
import ContactUs from "../pages/contactus/ContactUs";
import InquiryPageFirst from "../components/contact/InquiryPageFirst";
import InquiryPageSecond from "../components/contact/InquiryPageSecond";
import InquiryPageThird from "../components/contact/InquiryPageThird";
import DetailMedia from "../pages/media/DetailMedia";
const Admin = React.lazy(() => import("../pages/admin/Admin"));

const Router = () => {
  return (
    <BrowserRouter>
      <React.Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Intro />} />
          <Route path="/about" element={<About />}>
            <Route path="brand" element={<AboutBrand />} />
            <Route path="relationship" element={<AboutRelation />} />
            <Route path="price" element={<AboutPrice />} />
          </Route>
          <Route path="/product" element={<Product />}>
            <Route path="noshine" element={<Noshine />} />
            <Route path="technical/multi" element={<Multi />} />
            <Route path="technical/fresh" element={<Fresh />} />
            <Route path="technical/air" element={<Air />} />
            <Route path="technical/water" element={<Water />} />
            <Route path="technical/build" element={<Build />} />
            <Route path="redchec" element={<Redchec />} />
          </Route>
          <Route path="/admin" element={<Admin />} />
          <Route path="/media" element={<Media />} />
          <Route path="/media/:id" element={<DetailMedia />} />
          <Route path="/contact" element={<ContactUs />}>
            <Route path="stepOne" element={<InquiryPageFirst />} />
            <Route path="stepTwo" element={<InquiryPageSecond />} />
            <Route path="stepThree" element={<InquiryPageThird />} />
          </Route>
        </Routes>
      </React.Suspense>
    </BrowserRouter>
  );
};

export default Router;
