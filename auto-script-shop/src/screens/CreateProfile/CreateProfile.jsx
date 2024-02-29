import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

export const CreateProfile = () => {
  return (
    <div className="create-profile">
      <div className="div-19">
        <div className="overlap-50">
          <Link to="/user-hub">
            <button className="button-cancel">
              <div className="overlap-group-19">
                <Link className="rechteck-5" to="/user-hub" />
                <div className="text-wrapper-169">Cancel</div>
              </div>
            </button>
          </Link>
          <button className="button-submit">
            <div className="overlap-51">
              <Link to="/create-product-7">
                <img className="pfad-14" alt="Pfad" src="/img/pfad-43.png" />
              </Link>
              <div className="text-wrapper-170">Submit</div>
            </div>
          </button>
          <div className="textbox-tags">
            <div className="komponente-13">
              <div className="text-wrapper-171">Tags</div>
            </div>
          </div>
          <div className="text-wrapper-172">Tags</div>
          <div className="textbox-description">
            <p className="text-wrapper-173">Describe what the script should be able to do</p>
          </div>
          <div className="text-wrapper-174">Description</div>
          <div className="textbox-display-name">
            <div className="komponente-14">
              <div className="text-wrapper-171">Title</div>
            </div>
          </div>
          <div className="text-wrapper-175">Title</div>
          <div className="title-10">Request Service</div>
          <div className="text-wrapper-176">Accept AGB</div>
          <div className="reward-texbox">
            <div className="komponente-15">
              <div className="text-wrapper-171">999.-</div>
            </div>
          </div>
          <div className="text-wrapper-177">Reward</div>
          <div className="komponente-16" />
        </div>
        <footer className="footer-12">
          <div className="overlap-52">
            <img className="background-15" alt="Background" src="/img/background-40.png" />
            <Link to="/home">
              <img
                className="auto-script-shop-13"
                alt="Auto script shop"
                src="/img/auto-script-shop-high-resolution-logo-white-on-transparent-backg-22.png"
              />
            </Link>
            <div className="gruppe-81">
              <Link className="text-wrapper-178" to="/about-us">
                About{" "}
              </Link>
              <Link className="text-wrapper-179" to="/disclamer">
                Disclaimer
              </Link>
              <Link className="text-wrapper-180" to="/impressum">
                Impressum
              </Link>
              <Link className="terms-conditions-11" to="/terms-conditions">
                Terms &amp; Conditions
                <br />
              </Link>
            </div>
            <img className="linie-27" alt="Linie" src="/img/linie-2-22.png" />
            <div className="gruppe-82">
              <Link className="text-wrapper-178" to="/blog">
                Blog{" "}
              </Link>
            </div>
          </div>
        </footer>
        <div className="navbar-7">
          <div className="overlap-53">
            <img className="icon-black-12" alt="Icon black" src="/img/icon-black-29.png" />
            <div className="blackbackground-12" />
            <Link className="text-wrapper-181" to="/shop">
              Products
            </Link>
            <img className="user-12" alt="User" src="/img/user-128-24.png" />
            <img className="element-12" alt="Element" src="/img/629578-200-24.png" />
            <Link to="/shoppingcart">
              <img
                className="element-cart-12"
                alt="Element cart"
                src="/img/231-2317666-cart-icon-moving-shopping-cart-icon-24.png"
              />
            </Link>
            <Link className="gruppe-83" to="/home">
              <div className="icon-white-12" />
            </Link>
            <img className="linie-28" alt="Linie" src="/img/linie-3-24.png" />
            <Link className="requests-12" to="/taskboard">
              Requests
              <br />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
