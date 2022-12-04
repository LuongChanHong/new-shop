import React from "react";

import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";

import "../../css/base.css";
import "./home.css";

const Home = () => {
  return (
    <section className="homeContainer">
      <section className="home__wrapper">
        <Header />
        <section
          style={{ height: "5rem", backgroundColor: "yellowgreen" }}
        ></section>
        <Footer />
      </section>
    </section>
  );
};

export default Home;
