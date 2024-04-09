// import React from "react";
import Feacher from "../Feachered/Feacher";
import "./Card.css";

function Card() {
  return (
    <>
      <div className="mainbox">
        <div className="container">
          <div className="card">
            <div className="box">
              <div className="content">
                <h2>01</h2>
                <h3>Mens</h3>
                <p>
                  Elevate your style with our premium men's fashion destination,
                  offering timeless classics and modern essentials.
                </p>
                <a href="#">Go on Mens Section</a>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="box">
              <div className="content">
                <h2>02</h2>
                <h3>Women's</h3>
                <p>
                  Indulge in sophistication and express your unique style with
                  our curated selection of women's fashion essentials at our
                  chic boutique.
                </p>
                <a href="#">Go on Women's Section</a>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="box">
              <div className="content">
                <h2>03</h2>
                <h3>Children</h3>
                <p>
                  Explore a world of adorable fashion for your little ones with
                  our curated collection of children's clothing, blending
                  comfort, quality, and style for every occasion.
                </p>
                <a href="#">GO on Children Section</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Feacher />
    </>
  );
}

export default Card;
