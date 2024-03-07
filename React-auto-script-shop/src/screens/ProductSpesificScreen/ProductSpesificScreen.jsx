import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

export const ProductSpesificScreen = () => {
  return (
    <div className="product-spesific-screen">
      <div className="product-spesific-2">
        <div className="gruppe-75">
          <div className="div-18">
            <img className="icon-black-11" alt="Icon black" src="/img/icon-black-29.png" />
            <div className="div-18">
              <div className="overlap-48">
                <img className="icon-black-11" alt="Icon black" src="/img/icon-black-29.png" />
                <div className="blackbackground-11" />
                <Link className="text-wrapper-156" to="/shop">
                  Products
                </Link>
                <img className="user-11" alt="User" src="/img/user-128-24.png" />
                <img className="element-11" alt="Element" src="/img/629578-200-24.png" />
                <Link to="/shoppingcart">
                  <img
                    className="element-cart-11"
                    alt="Element cart"
                    src="/img/231-2317666-cart-icon-moving-shopping-cart-icon-24.png"
                  />
                </Link>
                <Link className="gruppe-76" to="/home">
                  <div className="icon-white-11" />
                </Link>
                <img className="linie-24" alt="Linie" src="/img/linie-3-24.png" />
                <Link className="requests-11" to="/taskboard">
                  Requests
                  <br />
                </Link>
              </div>
            </div>
          </div>
          <p className="description">
            <span className="text-wrapper-157">
              Description
              <br />
            </span>
            <span className="text-wrapper-158">
              AutoAdminPro is the ultimate solution for transforming
              <br />
              administrative tasks, offering a user-friendly interface and
              <br />
              comprehensive features that simplify and streamline a diverse
              <br />
              range of processes. From document management to Project
              <br />
              coordination, this software&#39;s intuitive design ensures seamless
              <br />
              execution of tasks with just a few clicks, making it suitable for
              <br />
              businesses of all sizes. The advanced automation capabilities
              <br />
              not only reduce the burden of repetitive tasks but also adapt to
              <br />
              dynamic business demands, allowing teams to focus on strategic
              <br />
              aspects of their roles. Security is a top priority, with robust
              <br />
              measures in place to protect sensitive data. Embrace the future
              <br />
              of administrative efficiency and productivity by choosing
              <br />
              AutoAdminPro for a seamless and secure workflow.
            </span>
          </p>
          <div className="overlap-49">
            <p className="price-per-device-CHF">
              <span className="text-wrapper-157">Price per device</span>
              <span className="text-wrapper-159">: </span>
              <span className="text-wrapper-160">
                CHF 20
                <br />
                <br />
                Amount:
                <br />
              </span>
            </p>
            <div className="gruppe-77">
              <div className="text-wrapper-161">1+</div>
            </div>
          </div>
          <p className="key-features-package-2">
            <span className="text-wrapper-157">
              Key Features
              <br />
            </span>
            <span className="text-wrapper-158">
              - Package Management: AutoAdminPro streamlines tasks with efficient package management.
              <br />- Customizable Scheduling: Adapt to diverse needs with AutoAdminPro&#39;s flexible scheduling.
              <br />- Version Control: Ensure precise workflow with advanced version control.
              <br />- Logging and Notifications: Enhance communication with robust logging and notifications.
              <br />- Backup and Rollback: Ensure data integrity with AutoAdminPro&#39;s reliable backup and rollback.
            </span>
          </p>
          <footer className="footer-11">
            <div className="overlap-group-18">
              <img className="background-14" alt="Background" src="/img/background-40.png" />
              <Link to="/home">
                <img
                  className="auto-script-shop-12"
                  alt="Auto script shop"
                  src="/img/auto-script-shop-high-resolution-logo-white-on-transparent-backg-22.png"
                />
              </Link>
              <div className="gruppe-78">
                <Link className="text-wrapper-162" to="/about-us">
                  About{" "}
                </Link>
                <Link className="text-wrapper-163" to="/disclamer">
                  Disclaimer
                </Link>
                <Link className="text-wrapper-164" to="/impressum">
                  Impressum
                </Link>
                <Link className="terms-conditions-10" to="/terms-conditions">
                  Terms &amp; Conditions
                  <br />
                </Link>
              </div>
              <img className="linie-25" alt="Linie" src="/img/linie-2-22.png" />
              <div className="gruppe-79">
                <Link className="text-wrapper-162" to="/blog">
                  Blog{" "}
                </Link>
              </div>
            </div>
          </footer>
          <div className="text-wrapper-165">AutoAdminPro</div>
          <img className="linie-26" alt="Linie" src="/img/linie-4-1.png" />
          <img className="pfad-13" alt="Pfad" src="/img/pfad-47.png" />
          <Link className="loginfield-2" to="/shoppingcart">
            <div className="text-wrapper-166">Add to cart</div>
          </Link>
          <div className="gruppe-80">
            <div className="text-wrapper-167">- Thomas D. Hofstätter</div>
          </div>
          <div className="text-wrapper-168">Created by</div>
          <img className="bild-16" alt="Bild" src="/img/bild-22-2.png" />
        </div>
      </div>
    </div>
  );
};
