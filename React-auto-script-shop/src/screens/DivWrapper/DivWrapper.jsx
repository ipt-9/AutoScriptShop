import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

export const DivWrapper = () => {
  return (
    <div className="div-wrapper">
      <div className="create-product-3">
        <div className="title-14">Successfully Created Product!</div>
        <Link className="gruppe-114" to="/user-hub">
          <div className="text-wrapper-265">Continue</div>
        </Link>
        <footer className="footer-20">
          <div className="overlap-group-28">
            <img className="background-25" alt="Background" src="/img/background-40.png" />
            <Link to="/home">
              <img
                className="auto-script-shop-21"
                alt="Auto script shop"
                src="/img/auto-script-shop-high-resolution-logo-white-on-transparent-backg-22.png"
              />
            </Link>
            <div className="gruppe-115">
              <Link className="text-wrapper-266" to="/about-us">
                About{" "}
              </Link>
              <Link className="text-wrapper-267" to="/disclamer">
                Disclaimer
              </Link>
              <Link className="text-wrapper-268" to="/impressum">
                Impressum
              </Link>
              <Link className="terms-conditions-19" to="/terms-conditions">
                Terms &amp; Conditions
                <br />
              </Link>
            </div>
            <img className="linie-43" alt="Linie" src="/img/linie-2-22.png" />
            <div className="gruppe-116">
              <Link className="text-wrapper-266" to="/blog">
                Blog{" "}
              </Link>
            </div>
          </div>
        </footer>
        <div className="navbar-15">
          <div className="overlap-85">
            <img className="icon-black-20" alt="Icon black" src="/img/icon-black-29.png" />
            <div className="blackbackground-20" />
            <Link className="text-wrapper-269" to="/shop">
              Products
            </Link>
            <img className="user-20" alt="User" src="/img/user-128-24.png" />
            <img className="element-20" alt="Element" src="/img/629578-200-24.png" />
            <Link to="/shoppingcart">
              <img
                className="element-cart-20"
                alt="Element cart"
                src="/img/231-2317666-cart-icon-moving-shopping-cart-icon-24.png"
              />
            </Link>
            <Link className="gruppe-117" to="/home">
              <div className="icon-white-20" />
            </Link>
            <img className="linie-44" alt="Linie" src="/img/linie-3-24.png" />
            <Link className="requests-20" to="/taskboard">
              Requests
              <br />
            </Link>
          </div>
        </div>
        <img className="clean-4" alt="Clean" src="/img/clean-4.png" />
      </div>
    </div>
  );
};
