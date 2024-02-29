import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

export const Logout = () => {
  return (
    <div className="logout">
      <div className="div-25">
        <Link className="buttons-3" to="/home">
          <div className="text-wrapper-243">continue browsing</div>
        </Link>
        <div className="log-out-successful-wrapper">
          <div className="log-out-successful">
            Log out successful
            <br />
          </div>
        </div>
        <footer className="footer-18">
          <div className="overlap-group-26">
            <img className="background-21" alt="Background" src="/img/background-40.png" />
            <Link to="/home">
              <img
                className="auto-script-shop-19"
                alt="Auto script shop"
                src="/img/auto-script-shop-high-resolution-logo-white-on-transparent-backg-22.png"
              />
            </Link>
            <div className="gruppe-103">
              <Link className="text-wrapper-244" to="/about-us">
                About{" "}
              </Link>
              <Link className="text-wrapper-245" to="/disclamer">
                Disclaimer
              </Link>
              <Link className="text-wrapper-246" to="/impressum">
                Impressum
              </Link>
              <Link className="terms-conditions-17" to="/terms-conditions">
                Terms &amp; Conditions
                <br />
              </Link>
            </div>
            <img className="linie-39" alt="Linie" src="/img/linie-2-22.png" />
            <div className="gruppe-104">
              <Link className="text-wrapper-244" to="/blog">
                Blog{" "}
              </Link>
            </div>
          </div>
        </footer>
        <div className="navbar-13">
          <div className="overlap-76">
            <img className="icon-black-18" alt="Icon black" src="/img/icon-black-29.png" />
            <div className="blackbackground-18" />
            <Link className="text-wrapper-247" to="/shop">
              Products
            </Link>
            <img className="user-18" alt="User" src="/img/user-128-24.png" />
            <img className="element-18" alt="Element" src="/img/629578-200-24.png" />
            <Link to="/shoppingcart">
              <img
                className="element-cart-18"
                alt="Element cart"
                src="/img/231-2317666-cart-icon-moving-shopping-cart-icon-24.png"
              />
            </Link>
            <Link className="gruppe-105" to="/home">
              <div className="icon-white-18" />
            </Link>
            <img className="linie-40" alt="Linie" src="/img/linie-3-24.png" />
            <Link className="requests-18" to="/taskboard">
              Requests
              <br />
            </Link>
          </div>
        </div>
        <img className="clean-3" alt="Clean" src="/img/clean-3.png" />
      </div>
    </div>
  );
};
