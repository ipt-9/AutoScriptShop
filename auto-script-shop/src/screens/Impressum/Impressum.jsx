import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

export const Impressum = () => {
  return (
    <div className="impressum">
      <div className="div-8">
        <div className="overlap-30">
          <div className="title-4">Statement of ownership</div>
          <div className="rechteck-3" />
          <div className="text-wrapper-85">{""}</div>
          <div className="text-wrapper-86">{""}</div>
          <p className="publisher-and">
            <span className="text-wrapper-87">
              <br />
            </span>
            <span className="text-wrapper-88">
              Publisher and Responsible for Content:
              <br />
            </span>
            <span className="text-wrapper-87">
              Auto Script Shop Platform
              <br />
              <br />
            </span>
            <span className="text-wrapper-88">
              Represented by:
              <br />
            </span>
            <span className="text-wrapper-87">
              Elias Schwegler, Linus Becker, Collyn Legast, and Manuel Kram
              <br />
              <br />
            </span>
            <span className="text-wrapper-88">
              Contact:
              <br />
            </span>
            <span className="text-wrapper-87">
              Address: <br />
              Kottenmatt 14
              <br />
              Sursee, 6210
              <br />
              Switzerland
              <br />
              <br />
              Phone: +41 79 944 10 10 <br />
              Email: <br />
              elias_schwegler@sluz.ch, linus_becker@sluz.ch, <br />
              collyn_legast@sluz.ch, manuel_kram@sluz.ch
              <br />
              <br />
            </span>
            <span className="text-wrapper-88">
              Registration:
              <br />
            </span>
            <span className="text-wrapper-87">
              Business Registration Number: In Progress
              <br />
              Registered in: In Progress
              <br />
              <br />
            </span>
            <span className="text-wrapper-88">
              Regulatory Authority:
              <br />
            </span>
            <span className="text-wrapper-87">
              In Progress
              <br />
              <br />
            </span>
            <span className="text-wrapper-88">
              VAT Identification Number:
              <br />
            </span>
            <span className="text-wrapper-87">In Progress</span>
          </p>
        </div>
        <footer className="footer-6">
          <div className="overlap-group-12">
            <img className="background-6" alt="Background" src="/img/background-40.png" />
            <Link to="/home">
              <img
                className="auto-script-shop-7"
                alt="Auto script shop"
                src="/img/auto-script-shop-high-resolution-logo-white-on-transparent-backg-22.png"
              />
            </Link>
            <div className="gruppe-59">
              <Link className="text-wrapper-89" to="/about-us">
                About{" "}
              </Link>
              <Link className="text-wrapper-90" to="/disclamer">
                Disclaimer
              </Link>
              <div className="text-wrapper-91">Impressum</div>
              <Link className="terms-conditions-7" to="/terms-conditions">
                Terms &amp; Conditions
                <br />
              </Link>
            </div>
            <img className="linie-12" alt="Linie" src="/img/linie-2-22.png" />
            <div className="gruppe-60">
              <Link className="text-wrapper-89" to="/blog">
                Blog{" "}
              </Link>
            </div>
          </div>
        </footer>
        <div className="navbar-5">
          <div className="overlap-31">
            <img className="icon-black-6" alt="Icon black" src="/img/icon-black-29.png" />
            <div className="blackbackground-6" />
            <Link className="text-wrapper-92" to="/shop">
              Products
            </Link>
            <img className="user-6" alt="User" src="/img/user-128-24.png" />
            <img className="element-6" alt="Element" src="/img/629578-200-24.png" />
            <Link to="/shoppingcart">
              <img
                className="element-cart-6"
                alt="Element cart"
                src="/img/231-2317666-cart-icon-moving-shopping-cart-icon-24.png"
              />
            </Link>
            <Link className="gruppe-61" to="/home">
              <div className="icon-white-6" />
            </Link>
            <img className="linie-13" alt="Linie" src="/img/linie-3-24.png" />
            <Link className="requests-6" to="/taskboard">
              Requests
              <br />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
