import React from "react";

function Services() {
  return (
    <section className="services" id="services">
      <div className="heading">
        <span>Services</span>
        <h2>We provide best food services</h2>
      </div>
      <div className="servives-container">
        <div className="s-box">
          <img src="/images/order.png" alt="Order" />
          <h3>You Order</h3>
          <p>
            Pesan Pizza Favorit Anda dengan Mudah! Pilih dari menu kami yang
            beragam, sesuaikan topping, dan nikmati pengantaran cepat langsung
            ke pintu Anda.
          </p>
        </div>
        <div className="s-box">
          <img src="/images/shipping.png" alt="Shipping" />
          <h3>Shipping</h3>
          <p>
            Pizza Segar, Langsung ke Pintu Anda! Nikmati layanan pengantaran
            cepat dan andal. Pesan sekarang dan rasakan kelezatan Pizza Palace
            tanpa harus keluar rumah!
          </p>
        </div>
        <div className="s-box">
          <img src="/images/delivered.png" alt="Delivered" />
          <h3>Delivered</h3>
          <p>
            Pengantaran Tepat Waktu! Kami pastikan pizza Anda sampai hangat dan
            lezat. Pesan sekarang, nikmati segera!
          </p>
        </div>
      </div>
    </section>
  );
}

export default Services;
