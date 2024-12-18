import React from "react";

function Menu() {
  return (
    <section className="menu" id="menu">
      <div className="heading">
        <span>Menu</span>
        <h2>Tasty menu of the week</h2>
      </div>
      <div className="menu-container">
        <div className="box">
          <div className="box-img">
            <img src="/images/cheese.png" alt="Cheese Pizza" />
          </div>
          <h2>Cheese Pizza</h2>
          <h3>Tasty Food</h3>
          <span>$30.05</span>
          <i className="bx bx-cart-alt"></i>
        </div>
        <div className="box">
          <div className="box-img">
            <img src="/images/tropical.png" alt="Tropical Pizza" />
          </div>
          <h2>Tropical Pizza</h2>
          <h3>Tasty Food</h3>
          <span>$42.05</span>
          <i className="bx bx-cart-alt"></i>
        </div>
        <div className="box">
          <div className="box-img">
            <img src="/images/macaroni.png" alt="Macaroni Pizza" />
          </div>
          <h2>Macaroni Pizza</h2>
          <h3>Tasty Food</h3>
          <span>$12.05</span>
          <i className="bx bx-cart-alt"></i>
        </div>
      </div>
    </section>
  );
}

export default Menu;
