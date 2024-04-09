import React from "react";

import "./Comp2.css";

function Comp2(props) {
  return (
    <>
      <div className="shopp">
        <div className="product-card">
          <div className="badge">Hot</div>
          <div className="product-tumb">
            <img src={props.img} alt="" />
          </div>
          <div className="product-details">
            <span className="product-catagory">{props.heading}</span>
            <h4>
              <a href="">{props.heading2}</a>
            </h4>
            <p>{props.discription}</p>
            <div className="product-bottom-details">
              <div className="product-price">
                <small>{props.price}</small>$230.99
              </div>
              <div className="product-links">
                <a href="">
                  <i className="fa fa-heart"></i>
                </a>
                <a href="">
                  <i className="fa fa-shopping-cart"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Comp2;
