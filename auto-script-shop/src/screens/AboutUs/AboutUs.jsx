import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

export const AboutUs = () => {
  return (
    <div className="about-us">
      <div className="div-6">
        <div className="overlap-23">
          <div className="title">About Us</div>
          <div className="title-2">About Us</div>
        </div>
        <div className="overlap-24">
          <div className="text-wrapper-66">{""}</div>
          <div className="text-wrapper-66">{""}</div>
        </div>
        <div className="overlap-25">
          <div className="text-wrapper-67">{""}</div>
          <footer className="footer-4">
            <div className="overlap-group-10">
              <img className="background-4" alt="Background" src="/img/background-40.png" />
              <Link to="/home">
                <img
                  className="auto-script-shop-5"
                  alt="Auto script shop"
                  src="/img/auto-script-shop-high-resolution-logo-white-on-transparent-backg-22.png"
                />
              </Link>
              <div className="gruppe-53">
                <div className="text-wrapper-68">About </div>
                <Link className="text-wrapper-69" to="/disclamer">
                  Disclaimer
                </Link>
                <Link className="text-wrapper-70" to="/impressum">
                  Impressum
                </Link>
                <Link className="terms-conditions-5" to="/terms-conditions">
                  Terms &amp; Conditions
                  <br />
                </Link>
              </div>
              <img className="linie-8" alt="Linie" src="/img/linie-2-22.png" />
              <div className="gruppe-54">
                <Link className="text-wrapper-71" to="/blog">
                  Blog{" "}
                </Link>
              </div>
            </div>
          </footer>
          <div className="text-wrapper-67">{""}</div>
          <p className="the-concept-the">
            <span className="text-wrapper-72">{""}</span>
            <span className="text-wrapper-73">
              The Concept: <br />
            </span>
            <span className="text-wrapper-74">
              The basic concept of this shop is simple. You can buy or offer automation scripts.
              <br />
              But not only that. You can post a request for a script you need and someone else <br />
              will then write for you. The best thing, both get money. The programmer gets the initial
              <br />
              reward, if he delivers an acceptable product on time, and 87.5% from every sale of the
              <br />
              product afterward. The request poster gets the script of his need and 5% from every
              <br />
              subsequent sale on this platform.
              <br />
              <br />
            </span>
            <span className="text-wrapper-73">
              The Team:
              <br />
            </span>
            <span className="text-wrapper-74">
              This website is run by a little team of 4 peoples. All of us are students at the
              <br />
              FMZ in Lucerne in the 3rd year to become Software developers.
              <br />
              <br />
              <br />
            </span>
            <span className="text-wrapper-73">Collyn Legast </span>
            <span className="text-wrapper-74">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Lead development
              <br />
              <br />
            </span>
            <span className="text-wrapper-73">Manuel Kram</span>
            <span className="text-wrapper-74">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Lead Design
              <br />
              <br />
            </span>
            <span className="text-wrapper-73">Elias Schwegler </span>
            <span className="text-wrapper-74">
              &nbsp;&nbsp;&nbsp;&nbsp; Chief Technology Officer
              <br />
              <br />
            </span>
            <span className="text-wrapper-73">Linus Becker&nbsp;&nbsp;</span>
            <span className="text-wrapper-74">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Chief Coordination Officer
              <br />
              <br />
              <br />
            </span>
          </p>
          <img className="brainstorm" alt="Brainstorm" src="/img/brainstorm.png" />
        </div>
        <div className="navbar-3">
          <div className="overlap-26">
            <img className="icon-black-4" alt="Icon black" src="/img/icon-black-29.png" />
            <div className="blackbackground-4" />
            <Link className="text-wrapper-75" to="/shop">
              Products
            </Link>
            <img className="user-4" alt="User" src="/img/user-128-24.png" />
            <img className="element-4" alt="Element" src="/img/629578-200-24.png" />
            <Link to="/shoppingcart">
              <img
                className="element-cart-4"
                alt="Element cart"
                src="/img/231-2317666-cart-icon-moving-shopping-cart-icon-24.png"
              />
            </Link>
            <Link className="gruppe-55" to="/home">
              <div className="icon-white-4" />
            </Link>
            <img className="linie-9" alt="Linie" src="/img/linie-3-24.png" />
            <Link className="requests-4" to="/taskboard">
              Requests
              <br />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
