import React from "react";

function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="contact-box">
        <h3>Pizza Palace</h3>
        <span>Connect With Us</span>
        <div className="social">
          <a href="#">
            <i className="bx bxl-facebook"></i>
          </a>
          <a href="#">
            <i className="bx bxl-twitter"></i>
          </a>
          <a href="#">
            <i className="bx bxl-instagram"></i>
          </a>
        </div>
      </div>
      <div className="contact-box">
        <h3>Menu Link</h3>
        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#menu">Menu</a>
          </li>
          <li>
            <a href="#services">Service</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
      <div className="contact-box">
        <h3>Quick Link</h3>
        <ul>
          <li>
            <a href="#Contact">Contact</a>
          </li>
          <li>
            <a href="#Privacy Policy">Privacy Policy</a>
          </li>
          <li>
            <a href="#Disclaimer">Disclaimer</a>
          </li>
          <li>
            <a href="#Terms Of Use">Terms Of Use</a>
          </li>
        </ul>
      </div>
      <div className="contact-box address">
        <h3>Contact</h3>
        <i className="bx bxs-map">
          <span>005, Jalan BENGAWAN 2</span>
        </i>
        <i className="bx bxs-phone">
          <span>+62 8213213414</span>
        </i>
        <i className="bx bxs-envelope">
          <span>pizzapalace@email.com</span>
        </i>
      </div>
    </section>
  );
}

export default Contact;
