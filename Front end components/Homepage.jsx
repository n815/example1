import React, { useEffect } from "react";
import Footer from "./Footer";
import Hero from "./Hero";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Navbar from "./Navbar";
import Recommend from "./Recommend";
import ScrollToTop from "./ScrollToTop";
import Services from "./Services";
import Testimonials from "./Testimonials";
import scrollreveal from "scrollreveal";
export default function Homepage() {

  return (
    <div>
      <ScrollToTop />
      <Navbar />
      <Hero />
      <Services />
      <Recommend />
      <Testimonials />
      <Footer/>
    </div>
    
  );
}
