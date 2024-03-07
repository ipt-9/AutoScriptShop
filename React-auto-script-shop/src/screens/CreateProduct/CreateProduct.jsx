import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

export const CreateProduct = () => {
  return (
    <div className="create-product">
      <div className="div-23">
        <div className="title-12">Successfully Requested Service</div>
        <Link className="gruppe-92" to="/user-hub">
          <div className="text-wrapper-221">Continue</div>
        </Link>
        <footer className="footer-15">
          <div className="overlap-group-23">
            <img className="background-18" alt="Background" src="/img/background-40.png" />
            <Link to="/home">
              <img
                className="auto-script-shop-16"
                alt="Auto script shop"
                src="/img/auto-script-shop-high-resolution-logo-white-on-transparent-backg-22.png"
              />
            </Link>
            <div className="gruppe-93">
              <Link className="text-wrapper-222" to="/about-us">
                About{" "}
              </Link>
              <Link className="text-wrapper-223" to="/disclamer">
                Disclaimer
              </Link>
              <Link className="text-wrapper-224" to="/impressum">
                Impressum
              </Link>
              <Link className="terms-conditions-14" to="/terms-conditions">
                Terms &amp; Conditions
                <br />
              </Link>
            </div>
            <img className="linie-33" alt="Linie" src="/img/linie-2-22.png" />
            <div className="gruppe-94">
              <Link className="text-wrapper-222" to="/blog">
                Blog{" "}
              </Link>
            </div>
          </div>
        </footer>
        <div className="navbar-10">
          <div className="overlap-66">
            <img className="icon-black-15" alt="Icon black" src="/img/icon-black-29.png" />
            <div className="blackbackground-15" />
            <Link className="text-wrapper-225" to="/shop">
              Products
            </Link>
            <img className="user-15" alt="User" src="/img/user-128-24.png" />
            <img className="element-15" alt="Element" src="/img/629578-200-24.png" />
            <Link to="/shoppingcart">
              <img
                className="element-cart-15"
                alt="Element cart"
                src="/img/231-2317666-cart-icon-moving-shopping-cart-icon-24.png"
              />
            </Link>
            <Link className="gruppe-95" to="/home">
              <div className="icon-white-15" />
            </Link>
            <img className="linie-34" alt="Linie" src="/img/linie-3-24.png" />
            <Link className="requests-15" to="/taskboard">
              Requests
              <br />
            </Link>
          </div>
        </div>
        <img className="clean" alt="Clean" src="/img/clean-4.png" />
      </div>
    </div>
  );
};
