import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

export const BuyAsGuest = () => {
  return (
    <div className="buy-as-guest">
      <div className="div-20">
        <div className="title-11">Buy as Guest</div>
        <div className="buttons">
          <div className="overlap-group-20">
            <Link className="rechteck-6" to="/buy-confirmation" />
            <p className="buy">
              <span className="text-wrapper-182">&nbsp;</span>
              <span className="text-wrapper-183">Buy</span>
            </p>
          </div>
          <div className="overlap-54">
            <Link to="/shoppingcart">
              <img className="pfad-15" alt="Pfad" src="/img/pfad-39.png" />
            </Link>
            <div className="text-wrapper-184">Cancel</div>
          </div>
        </div>
        <div className="step">
          <div className="tobefield-fields">
            <div className="komponente-wrapper">
              <div className="komponente-17">
                <div className="text-wrapper-185">Firstname</div>
              </div>
            </div>
            <div className="overlap-55">
              <div className="komponente-18">
                <div className="text-wrapper-185">Lastname</div>
              </div>
            </div>
            <div className="overlap-56">
              <div className="komponente-19">
                <div className="text-wrapper-185">Street</div>
              </div>
            </div>
            <div className="overlap-57">
              <div className="komponente-20">
                <div className="text-wrapper-185">Place</div>
              </div>
            </div>
            <div className="overlap-group-21">
              <div className="komponente-21">
                <div className="text-wrapper-185">country</div>
              </div>
            </div>
            <div className="overlap-58">
              <div className="komponente-22">
                <div className="text-wrapper-185">Email</div>
              </div>
            </div>
          </div>
          <div className="text-wrapper-186">Step 1 Registration</div>
        </div>
        <div className="overlap-59">
          <div className="step-2">
            <div className="text-wrapper-187">Step 2 Select Paymant</div>
            <div className="text-wrapper-188">Paypal</div>
            <div className="text-wrapper-189">Mastercard</div>
            <div className="ellipse-13" />
            <div className="ellipse-14" />
            <div className="text-wrapper-190">invoice</div>
            <div className="ellipse-15" />
          </div>
          <div className="step-3">
            <div className="text-wrapper-191">Step 2 Select Payment</div>
            <div className="text-wrapper-192">Invoice</div>
            <div className="text-wrapper-193">Mastercard</div>
            <div className="text-wrapper-194">Paypal</div>
            <div className="komponente-23" />
            <div className="komponente-24" />
          </div>
          <div className="komponente-25" />
        </div>
        <div className="step-4">
          <div className="text-wrapper-195">Step 3 Confirm Cart</div>
          <div className="text-wrapper-196">Efficiency script</div>
          <div className="text-wrapper-197">4</div>
          <div className="text-wrapper-198">116.-</div>
          <div className="text-wrapper-199">Pyton autoupdater</div>
          <div className="text-wrapper-200">2</div>
          <div className="text-wrapper-201">200.-</div>
          <div className="text-wrapper-202">Total:</div>
          <div className="text-wrapper-203">316.-</div>
          <div className="text-wrapper-204">Confirm Cart</div>
          <div className="text-wrapper-205">Accept AGB</div>
          <div className="komponente-26" />
          <div className="komponente-27" />
        </div>
        <footer className="footer-13">
          <div className="overlap-60">
            <img className="background-16" alt="Background" src="/img/background-40.png" />
            <Link to="/home">
              <img
                className="auto-script-shop-14"
                alt="Auto script shop"
                src="/img/auto-script-shop-high-resolution-logo-white-on-transparent-backg-22.png"
              />
            </Link>
            <div className="gruppe-84">
              <Link className="text-wrapper-206" to="/about-us">
                About{" "}
              </Link>
              <Link className="text-wrapper-207" to="/disclamer">
                Disclaimer
              </Link>
              <Link className="text-wrapper-208" to="/impressum">
                Impressum
              </Link>
              <Link className="terms-conditions-12" to="/terms-conditions">
                Terms &amp; Conditions
                <br />
              </Link>
            </div>
            <img className="linie-29" alt="Linie" src="/img/linie-2-22.png" />
            <div className="gruppe-85">
              <Link className="text-wrapper-206" to="/blog">
                Blog{" "}
              </Link>
            </div>
          </div>
        </footer>
        <div className="navbar-8">
          <div className="overlap-61">
            <img className="icon-black-13" alt="Icon black" src="/img/icon-black-29.png" />
            <div className="blackbackground-13" />
            <Link className="text-wrapper-209" to="/shop">
              Products
            </Link>
            <img className="user-13" alt="User" src="/img/user-128-24.png" />
            <img className="element-13" alt="Element" src="/img/629578-200-24.png" />
            <Link to="/shoppingcart">
              <img
                className="element-cart-13"
                alt="Element cart"
                src="/img/231-2317666-cart-icon-moving-shopping-cart-icon-24.png"
              />
            </Link>
            <Link className="gruppe-86" to="/home">
              <div className="icon-white-13" />
            </Link>
            <img className="linie-30" alt="Linie" src="/img/linie-3-24.png" />
            <Link className="requests-13" to="/taskboard">
              Requests
              <br />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
