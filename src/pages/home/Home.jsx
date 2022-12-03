import React from "react";

import Header from "../../components/header/Header";

import "../../css/base.css";
import "./home.css";

const Home = () => {
  return (
    <section className="homeContainer">
      <section className="home__wrapper">
        <Header />
      </section>
    </section>
  );
};

export default Home;
