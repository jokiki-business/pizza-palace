import React from "react";

function Home() {
  return (
    <section className="home" id="home">
      <div className="home-text">
        <h1>Pizza Palace</h1>
        <h2>
          The tasty pizza of <br /> your choice
        </h2>
        <a href="#" className="btn">
          View Menu
        </a>
      </div>
      <div className="home-img">
        <img src="/images/home.png" alt="Pizza" />
      </div>
    </section>
  );
}

export default Home;
