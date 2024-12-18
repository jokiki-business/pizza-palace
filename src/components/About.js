import React from "react";

function About() {
  return (
    <section className="about" id="about">
      <div className="about-img">
        <img src="/images/about.png" alt="About Us" />
      </div>
      <div className="about-text">
        <span>About Us</span>
        <h2>
          We make good and <br /> tasty pizzas
        </h2>
        <p>
          Selamat datang di Pizza Palace, tempat di mana setiap irisan pizza
          adalah karya seni yang terinspirasi oleh cinta dan dedikasi!
        </p>
        <a href="#" className="btn">
          Learn More
        </a>
      </div>
    </section>
  );
}

export default About;
