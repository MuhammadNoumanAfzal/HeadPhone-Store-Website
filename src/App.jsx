import React from "react";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Banner from "./components/Banner";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <NavBar></NavBar>
      <Hero></Hero>
      <Services></Services>
      <Banner></Banner>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
};

export default App;
