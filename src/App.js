import React from "react";
import Navbar from "./components/navbar/Navbar";
import Banner from "./components/Banner/Banner";
import Feature from "./components/Feature/Feature";
import Project from "./components/Project/Project";
import Resume from "./components/Resume/Resume";
import { Contact } from "./components/contact/Contact";
import { Footer } from "./components/footer/Footer";
import { FooterBottom } from "./components/footer/FooterBottom";

function App() {
  return (
    <div className=" h-auto bg-bodyColor text-lightText">
      <div className = " max-m-screen-xl mx-auto px-4                  border-4         border-white ">
        <Navbar />
        <Banner/>
        <Feature/>
        <Project/>
        <Resume/>
        <Contact/>
        <Footer/>
        <FooterBottom/>
      </div>

    </div>
  );
}

export default App;
