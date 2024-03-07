import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

export const Disclamer = () => {
  return (
    <div className="disclamer">
      <div className="div-7">
        <div className="overlap-27">
          <div className="title-3">Disclaimer for AutoScriptShop</div>
          <div className="overlap-28">
            <div className="text-wrapper-76">{""}</div>
            <div className="text-wrapper-77">{""}</div>
            <p className="disclaimer-for">
              <span className="text-wrapper-78">{""}</span>
              <span className="text-wrapper-79">
                Disclaimer for AutoScriptShop
                <br />
                <br />
              </span>
              <span className="text-wrapper-80">
                Please read this disclaimer (&#34;disclaimer&#34;) carefully before using the AutoScriptShop website
                (“website”, &#34;service&#34;) operated by AutoScriptShop (&#34;us&#34;, &#39;we&#34;, &#34;our&#34;).
                <br />
              </span>
              <span className="text-wrapper-79">
                <br />
                Conditions of Use
                <br />
              </span>
              <span className="text-wrapper-80">
                <br />
                By using this service, you certify that you have read and reviewed this disclaimer and that you agree to
                comply with its terms. If you do not want to be bound by the terms of this disclaimer, you are advised
                to leave the website accordingly. AutoScriptShop only grants use and access of this website, its
                products, and its services to those who have accepted its terms.
                <br />
              </span>
              <span className="text-wrapper-79">
                <br />
                Privacy Policy
                <br />
                <br />
              </span>
              <span className="text-wrapper-80">
                Before you continue using our website, we advise you to read our privacy policy regarding our user data
                collection. It will help you better understand our practices.
                <br />
              </span>
              <span className="text-wrapper-79">
                <br />
                Age Restriction
                <br />
                <br />
              </span>
              <span className="text-wrapper-80">
                You must be at least 18 (eighteen) years of age to use this website. By using this website and by
                agreeing to this disclaimer, you warrant and represent that you are at least 18 years of age.
                <br />
              </span>
              <span className="text-wrapper-79">
                <br />
                Intellectual Property
                <br />
                <br />
              </span>
              <span className="text-wrapper-80">
                The content and intellectual property rights found on this website, as well as all materials, are owned
                by us or have been granted permission by the owner. You may not reuse, republish, or reprint such
                content without our written consent.
                <br />
              </span>
              <span className="text-wrapper-79">
                <br />
                User Accounts
                <br />
              </span>
              <span className="text-wrapper-80">
                <br />
                As a user of this website, you may be asked to register with us and provide private information. You are
                responsible for ensuring the accuracy of this information, and you are responsible for maintaining the
                safety and security of your identifying information. You are also responsible for all activities that
                occur under your account or password.
                <br />
              </span>
              <span className="text-wrapper-79">
                <br />
                Applicable Law
                <br />
                <br />
              </span>
              <span className="text-wrapper-80">
                By visiting this website, you agree that the laws of the [insert governing location], without regard to
                principles of conflict laws, will govern these terms and conditions, or any dispute of any sort that
                might come between AutoScriptShop and you, or its business partners and associates.
              </span>
            </p>
          </div>
        </div>
        <footer className="footer-5">
          <div className="overlap-group-11">
            <img className="background-5" alt="Background" src="/img/background-40.png" />
            <Link to="/home">
              <img
                className="auto-script-shop-6"
                alt="Auto script shop"
                src="/img/auto-script-shop-high-resolution-logo-white-on-transparent-backg-22.png"
              />
            </Link>
            <div className="gruppe-56">
              <Link className="text-wrapper-81" to="/about-us">
                About{" "}
              </Link>
              <div className="text-wrapper-82">Disclaimer</div>
              <Link className="text-wrapper-83" to="/impressum">
                Impressum
              </Link>
              <Link className="terms-conditions-6" to="/terms-conditions">
                Terms &amp; Conditions
                <br />
              </Link>
            </div>
            <img className="linie-10" alt="Linie" src="/img/linie-2-22.png" />
            <div className="gruppe-57">
              <Link className="text-wrapper-81" to="/blog">
                Blog{" "}
              </Link>
            </div>
          </div>
        </footer>
        <div className="navbar-4">
          <div className="overlap-29">
            <img className="icon-black-5" alt="Icon black" src="/img/icon-black-29.png" />
            <div className="blackbackground-5" />
            <Link className="text-wrapper-84" to="/shop">
              Products
            </Link>
            <img className="user-5" alt="User" src="/img/user-128-24.png" />
            <img className="element-5" alt="Element" src="/img/629578-200-24.png" />
            <Link to="/shoppingcart">
              <img
                className="element-cart-5"
                alt="Element cart"
                src="/img/231-2317666-cart-icon-moving-shopping-cart-icon-24.png"
              />
            </Link>
            <Link className="gruppe-58" to="/home">
              <div className="icon-white-5" />
            </Link>
            <img className="linie-11" alt="Linie" src="/img/linie-3-24.png" />
            <Link className="requests-5" to="/taskboard">
              Requests
              <br />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
