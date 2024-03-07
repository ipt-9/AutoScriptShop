import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

export const Shoppingcart = () => {
  return (
    <div className="shoppingcart">
      <div className="div-13">
        <div className="overlap-44">
          <div className="tile">Your Cart:</div>
          <div className="product-in-cart">
            <div className="product-in-cart-2">
              <div className="overlap-group-15">
                <Link to="/product-spesific-1">
                  <img className="background-11" alt="Background" src="/img/background-28.png" />
                </Link>
                <div className="rechteck-4" />
                <div className="text-wrapper-131">Remove</div>
                <div className="text-wrapper-132">200.-</div>
                <img className="bild-15" alt="Bild" src="/img/bild-22-3.png" />
                <p className="key-features-package">
                  <br />
                  Key Features:
                  <br />
                  Package Management
                  <br />
                  Customizable Scheduling
                  <br />
                  Version Control
                  <br />
                  Logging and Notifications
                  <br />
                  Backup and Rollback
                  <br />
                </p>
                <Link className="amount" to="/shoppingcart-2">
                  <div className="text-wrapper-133">1</div>
                </Link>
                <div className="text-wrapper-134">AutoAdminPro</div>
              </div>
            </div>
            <div className="product-in-cart-3">
              <div className="overlap-group-15">
                <Link to="/product-spesific-1">
                  <img className="background-11" alt="Background" src="/img/background-28.png" />
                </Link>
                <div className="rechteck-4" />
                <div className="text-wrapper-131">Remove</div>
                <div className="text-wrapper-132">200.-</div>
                <img className="bild-15" alt="Bild" src="/img/bild-22-3.png" />
                <p className="key-features-package">
                  <br />
                  Key Features:
                  <br />
                  Package Management
                  <br />
                  Customizable Scheduling
                  <br />
                  Version Control
                  <br />
                  Logging and Notifications
                  <br />
                  Backup and Rollback
                  <br />
                </p>
                <Link className="amount" to="/shoppingcart-2">
                  <div className="text-wrapper-133">1</div>
                </Link>
                <div className="text-wrapper-134">AutoAdminPro</div>
              </div>
            </div>
          </div>
          <div className="total">
            <div className="text-wrapper-135">Total</div>
            <div className="text-wrapper-136">316.-</div>
          </div>
        </div>
        <div className="wiederholungsraster">
          <div className="div-14">
            <Link className="gruppe-67" to="/buy-as-guest">
              <div className="overlap-group-16">
                <Link to="/buy-as-guest">
                  <img className="pfad-12" alt="Pfad" src="/img/pfad-38-1.png" />
                </Link>
                <div className="text-wrapper-137">Buy as Guest</div>
              </div>
            </Link>
            <div className="login-wrapper">
              <div className="login">&nbsp;&nbsp;&nbsp;&nbsp; Login</div>
            </div>
          </div>
          <div className="div-15">
            <Link className="gruppe-67" to="/buy-as-guest">
              <div className="overlap-group-16">
                <Link to="/buy-as-guest">
                  <img className="pfad-12" alt="Pfad" src="/img/pfad-38-1.png" />
                </Link>
                <div className="text-wrapper-137">Buy as Guest</div>
              </div>
            </Link>
            <div className="login-wrapper">
              <div className="login">&nbsp;&nbsp;&nbsp;&nbsp; Login</div>
            </div>
          </div>
        </div>
        <footer className="footer-9">
          <div className="overlap-45">
            <img className="background-12" alt="Background" src="/img/background-40.png" />
            <Link to="/home">
              <img
                className="auto-script-shop-10"
                alt="Auto script shop"
                src="/img/auto-script-shop-high-resolution-logo-white-on-transparent-backg-22.png"
              />
            </Link>
            <div className="gruppe-68">
              <Link className="text-wrapper-138" to="/about-us">
                About{" "}
              </Link>
              <Link className="text-wrapper-139" to="/disclamer">
                Disclaimer
              </Link>
              <Link className="text-wrapper-140" to="/impressum">
                Impressum
              </Link>
              <Link className="terms-conditions-8" to="/terms-conditions">
                Terms &amp; Conditions
                <br />
              </Link>
            </div>
            <img className="linie-18" alt="Linie" src="/img/linie-2-22.png" />
            <div className="gruppe-69">
              <Link className="text-wrapper-138" to="/blog">
                Blog{" "}
              </Link>
            </div>
          </div>
        </footer>
        <div className="navbar-6">
          <div className="overlap-46">
            <img className="icon-black-9" alt="Icon black" src="/img/icon-black-29.png" />
            <div className="blackbackground-9" />
            <Link className="text-wrapper-141" to="/shop">
              Products
            </Link>
            <img className="user-9" alt="User" src="/img/user-128-24.png" />
            <img className="element-9" alt="Element" src="/img/629578-200-24.png" />
            <img
              className="element-cart-9"
              alt="Element cart"
              src="/img/231-2317666-cart-icon-moving-shopping-cart-icon-24.png"
            />
            <Link className="gruppe-70" to="/home">
              <div className="icon-white-9" />
            </Link>
            <img className="linie-19" alt="Linie" src="/img/linie-3-24.png" />
            <Link className="requests-9" to="/taskboard">
              Requests
              <br />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
