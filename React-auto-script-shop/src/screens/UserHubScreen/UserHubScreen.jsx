import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

export const UserHubScreen = () => {
  return (
    <div className="user-hub-screen">
      <div className="user-hub-2">
        <div className="overlap-86">
          <div className="overlap-87">
            <div className="settings-2">
              <div className="text-wrapper-270">Test Setting1</div>
            </div>
            <img className="bild-22" alt="Bild" src="/img/bild-22-5.png" />
          </div>
          <div className="tile-4">Order Number : 9832426</div>
          <div className="overlap-88">
            <div className="navbar-16">
              <div className="overlap-89">
                <img className="icon-black-21" alt="Icon black" src="/img/icon-black-29.png" />
                <div className="blackbackground-21" />
                <Link className="text-wrapper-271" to="/shop">
                  Products
                </Link>
                <img className="user-21" alt="User" src="/img/user-128-24.png" />
                <img className="element-21" alt="Element" src="/img/629578-200-24.png" />
                <Link to="/shoppingcart">
                  <img
                    className="element-cart-21"
                    alt="Element cart"
                    src="/img/231-2317666-cart-icon-moving-shopping-cart-icon-24.png"
                  />
                </Link>
                <Link className="gruppe-118" to="/home">
                  <div className="icon-white-21" />
                </Link>
                <img className="linie-45" alt="Linie" src="/img/linie-3-24.png" />
                <Link className="requests-21" to="/taskboard">
                  Requests
                  <br />
                </Link>
              </div>
            </div>
            <div className="text-wrapper-272">{""}</div>
            <p className="date-of-purchase">
              Date of purchase: 20.12.2023
              <br />
              Payment: Mastercard ****0011
            </p>
            <div className="navbar-16">
              <div className="overlap-89">
                <img className="icon-black-21" alt="Icon black" src="/img/icon-black-29.png" />
                <div className="blackbackground-21" />
                <Link className="text-wrapper-271" to="/shop">
                  Products
                </Link>
                <img className="user-21" alt="User" src="/img/user-128-24.png" />
                <img className="element-21" alt="Element" src="/img/629578-200-24.png" />
                <Link to="/shoppingcart">
                  <img
                    className="element-cart-21"
                    alt="Element cart"
                    src="/img/231-2317666-cart-icon-moving-shopping-cart-icon-24.png"
                  />
                </Link>
                <Link className="gruppe-118" to="/home">
                  <div className="icon-white-21" />
                </Link>
                <img className="linie-45" alt="Linie" src="/img/linie-3-24.png" />
                <Link className="requests-21" to="/taskboard">
                  Requests
                  <br />
                </Link>
              </div>
            </div>
            <div className="rechteck-10" />
            <div className="text-wrapper-273">Max Mustermann</div>
            <Link className="text-wrapper-274" to="/logout">
              Logout
            </Link>
            <div className="text-wrapper-272">{""}</div>
            <Link className="text-wrapper-275" to="/user-hub-2">
              Purchase history
            </Link>
          </div>
          <p className="autoadminpro-price">
            <span className="text-wrapper-276">
              AutoAdminPro
              <br />
            </span>
            <span className="text-wrapper-277">
              <br />
            </span>
            <span className="text-wrapper-278">
              Price: CHF 40
              <br />
              Amount: 1<br />
              Created by: Thomas D. Hofstätter
            </span>
          </p>
          <img className="linie-46" alt="Linie" src="/img/linie-8.png" />
        </div>
        <footer className="footer-21">
          <div className="overlap-group-29">
            <img className="background-26" alt="Background" src="/img/background-40.png" />
            <Link to="/home">
              <img
                className="auto-script-shop-22"
                alt="Auto script shop"
                src="/img/auto-script-shop-high-resolution-logo-white-on-transparent-backg-22.png"
              />
            </Link>
            <div className="gruppe-119">
              <Link className="text-wrapper-279" to="/about-us">
                About{" "}
              </Link>
              <Link className="text-wrapper-280" to="/disclamer">
                Disclaimer
              </Link>
              <Link className="text-wrapper-281" to="/impressum">
                Impressum
              </Link>
              <Link className="terms-conditions-20" to="/terms-conditions">
                Terms &amp; Conditions
                <br />
              </Link>
            </div>
            <img className="linie-47" alt="Linie" src="/img/linie-2-22.png" />
            <div className="gruppe-120">
              <Link className="text-wrapper-279" to="/blog">
                Blog{" "}
              </Link>
            </div>
          </div>
        </footer>
        <p className="datadynamoscript">
          <span className="text-wrapper-276">
            DataDynamoScript
            <br />
          </span>
          <span className="text-wrapper-277">
            <br />
          </span>
          <span className="text-wrapper-278">
            Price: CHF 20
            <br />
            Amount: 1<br />
            Created by: Thomas D. Hofstätter
          </span>
        </p>
        <img className="bild-23" alt="Bild" src="/img/bild-18-2.png" />
        <p className="date-of-purchase-2">
          Date of purchase: 20.12.2023
          <br />
          Payment: Mastercard ****0011
        </p>
        <img className="linie-48" alt="Linie" src="/img/linie-8.png" />
      </div>
    </div>
  );
};
