import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

export const ShoppingcartScreen = () => {
  return (
    <div className="shoppingcart-screen">
      <div className="shoppingcart-2">
        <div className="overlap-62">
          <div className="tile-2">Hello Guest your Cart:</div>
          <div className="product-in-cart-4">
            <div className="product-in-cart-5">
              <div className="overlap-63">
                <div className="rechteck-7" />
                <div className="text-wrapper-210">Remove</div>
              </div>
              <div className="text-wrapper-211">300.-</div>
              <img className="bild-17" alt="Bild" src="/img/bild-22-3.png" />
              <div className="overlap-group-22">
                <p className="key-features-package-3">
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
                <div className="amount-2">
                  <div className="text-wrapper-212">3</div>
                </div>
              </div>
              <div className="text-wrapper-213">Python autoupdater</div>
            </div>
            <div className="product-in-cart-6">
              <div className="overlap-63">
                <div className="rechteck-7" />
                <div className="text-wrapper-210">Remove</div>
              </div>
              <div className="text-wrapper-211">300.-</div>
              <img className="bild-17" alt="Bild" src="/img/bild-22-3.png" />
              <div className="overlap-group-22">
                <p className="key-features-package-3">
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
                <div className="amount-2">
                  <div className="text-wrapper-212">3</div>
                </div>
              </div>
              <div className="text-wrapper-213">Python autoupdater</div>
            </div>
          </div>
          <div className="total-2">
            <div className="text-wrapper-214">Total</div>
            <div className="text-wrapper-215">416.-</div>
          </div>
        </div>
        <div className="wiederholungsraster-2">
          <div className="div-21">
            <Link className="gruppe-87" to="/buy-as-guest">
              <div className="text-wrapper-216">Buy as Guest</div>
            </Link>
            <div className="gruppe-88">
              <div className="login-2">&nbsp;&nbsp;&nbsp;&nbsp; Login</div>
            </div>
          </div>
          <div className="div-22">
            <Link className="gruppe-87" to="/buy-as-guest">
              <div className="text-wrapper-216">Buy as Guest</div>
            </Link>
            <div className="gruppe-88">
              <div className="login-2">&nbsp;&nbsp;&nbsp;&nbsp; Login</div>
            </div>
          </div>
        </div>
        <footer className="footer-14">
          <div className="overlap-64">
            <img className="background-17" alt="Background" src="/img/background-40.png" />
            <Link to="/home">
              <img
                className="auto-script-shop-15"
                alt="Auto script shop"
                src="/img/auto-script-shop-high-resolution-logo-white-on-transparent-backg-22.png"
              />
            </Link>
            <div className="gruppe-89">
              <Link className="text-wrapper-217" to="/about-us">
                About{" "}
              </Link>
              <Link className="text-wrapper-218" to="/disclamer">
                Disclaimer
              </Link>
              <Link className="text-wrapper-219" to="/impressum">
                Impressum
              </Link>
              <Link className="terms-conditions-13" to="/terms-conditions">
                Terms &amp; Conditions
                <br />
              </Link>
            </div>
            <img className="linie-31" alt="Linie" src="/img/linie-2-22.png" />
            <div className="gruppe-90">
              <Link className="text-wrapper-217" to="/blog">
                Blog{" "}
              </Link>
            </div>
          </div>
        </footer>
        <div className="navbar-9">
          <div className="overlap-65">
            <img className="icon-black-14" alt="Icon black" src="/img/icon-black-29.png" />
            <div className="blackbackground-14" />
            <Link className="text-wrapper-220" to="/shop">
              Products
            </Link>
            <img className="user-14" alt="User" src="/img/user-128-24.png" />
            <img className="element-14" alt="Element" src="/img/629578-200-24.png" />
            <Link to="/shoppingcart">
              <img
                className="element-cart-14"
                alt="Element cart"
                src="/img/231-2317666-cart-icon-moving-shopping-cart-icon-24.png"
              />
            </Link>
            <Link className="gruppe-91" to="/home">
              <div className="icon-white-14" />
            </Link>
            <img className="linie-32" alt="Linie" src="/img/linie-3-24.png" />
            <Link className="requests-14" to="/taskboard">
              Requests
              <br />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
