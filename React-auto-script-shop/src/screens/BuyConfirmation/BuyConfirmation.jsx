import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

export const BuyConfirmation = () => {
  return (
    <div className="buy-confirmation">
      <div className="div-24">
        <Link className="buttons-2" to="/home">
          <div className="text-wrapper-226">continue browsing</div>
        </Link>
        <div className="step-5">
          <div className="overlap-group-24">
            <div className="transaction">
              Transaction successful!
              <br />
            </div>
            <p className="text-wrapper-227">You will get a confirmation email soon</p>
          </div>
        </div>
        <footer className="footer-16">
          <div className="overlap-67">
            <img className="background-19" alt="Background" src="/img/background-40.png" />
            <Link to="/home">
              <img
                className="auto-script-shop-17"
                alt="Auto script shop"
                src="/img/auto-script-shop-high-resolution-logo-white-on-transparent-backg-22.png"
              />
            </Link>
            <div className="gruppe-96">
              <Link className="text-wrapper-228" to="/about-us">
                About{" "}
              </Link>
              <Link className="text-wrapper-229" to="/disclamer">
                Disclaimer
              </Link>
              <Link className="text-wrapper-230" to="/impressum">
                Impressum
              </Link>
              <Link className="terms-conditions-15" to="/terms-conditions">
                Terms &amp; Conditions
                <br />
              </Link>
            </div>
            <img className="linie-35" alt="Linie" src="/img/linie-2-22.png" />
            <div className="gruppe-97">
              <Link className="text-wrapper-228" to="/blog">
                Blog{" "}
              </Link>
            </div>
          </div>
        </footer>
        <div className="navbar-11">
          <div className="overlap-68">
            <img className="icon-black-16" alt="Icon black" src="/img/icon-black-29.png" />
            <div className="blackbackground-16" />
            <Link className="text-wrapper-231" to="/shop">
              Products
            </Link>
            <img className="user-16" alt="User" src="/img/user-128-24.png" />
            <img className="element-16" alt="Element" src="/img/629578-200-24.png" />
            <Link to="/shoppingcart">
              <img
                className="element-cart-16"
                alt="Element cart"
                src="/img/231-2317666-cart-icon-moving-shopping-cart-icon-24.png"
              />
            </Link>
            <Link className="gruppe-98" to="/home">
              <div className="icon-white-16" />
            </Link>
            <img className="linie-36" alt="Linie" src="/img/linie-3-24.png" />
            <Link className="requests-16" to="/taskboard">
              Requests
              <br />
            </Link>
          </div>
        </div>
        <img className="clean-2" alt="Clean" src="/img/clean-3.png" />
      </div>
    </div>
  );
};
