import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";

import HomePage from "./landing_page/home/HomePage.js";
import SignUp from "./landing_page/signup/SignUp.js";
import AboutPage from "./landing_page/about/ApoutPage.js";
import ProductPage from "./landing_page/products/ProductsPage.js";
import PricingPage from "./landing_page/pricing/PricingPage.js";
import SupportPage from "./landing_page/support/SupportPage.js";

import NotFound from "./landing_page/NotFound.js";
import Navbar from "./landing_page/Navbar.js";
import Footer from "./landing_page/Footer.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/product" element={<ProductPage />} />
      <Route path="/pricing" element={<PricingPage />} />
      <Route path="/support" element={<SupportPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    <Footer />
  </BrowserRouter>
);