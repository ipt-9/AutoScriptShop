import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

export const CreateProductScreen = () => {
  return (
    <div className="create-product-screen">
      <div className="create-product-2">
        <div className="overlap-69">
          <div className="title-13">Create a new Product</div>
          <div className="overlap-70">
            <div className="text-wrapper-232">Drag your Files here</div>
            <img className="upload" alt="Upload" src="/img/upload.png" />
          </div>
          <div className="overlap-71">
            <div className="komponente-28">
              <div className="text-wrapper-233">Product Name</div>
            </div>
          </div>
          <div className="overlap-72">
            <div className="komponente-29">
              <div className="text-wrapper-233">Tags</div>
            </div>
          </div>
          <div className="overlap-73">
            <div className="text-wrapper-234">Product Description</div>
            <img className="pfad-16" alt="Pfad" src="/img/pfad-40-1.png" />
            <div className="komponente-30">
              <div className="text-wrapper-235">Product Description</div>
            </div>
          </div>
          <Link className="gruppe-99" to="/create-product-6">
            <div className="text-wrapper-236">Submit</div>
          </Link>
          <div className="overlap-74">
            <Link className="rechteck-8" to="/user-hub" />
            <Link className="text-wrapper-237" to="/user-hub">
              Cancel
            </Link>
          </div>
          <div className="text-wrapper-238">Accept AGB</div>
          <div className="komponente-31" />
        </div>
        <footer className="footer-17">
          <div className="overlap-group-25">
            <img className="background-20" alt="Background" src="/img/background-40.png" />
            <Link to="/home">
              <img
                className="auto-script-shop-18"
                alt="Auto script shop"
                src="/img/auto-script-shop-high-resolution-logo-white-on-transparent-backg-22.png"
              />
            </Link>
            <div className="gruppe-100">
              <Link className="text-wrapper-239" to="/about-us">
                About{" "}
              </Link>
              <Link className="text-wrapper-240" to="/disclamer">
                Disclaimer
              </Link>
              <Link className="text-wrapper-241" to="/impressum">
                Impressum
              </Link>
              <Link className="terms-conditions-16" to="/terms-conditions">
                Terms &amp; Conditions
                <br />
              </Link>
            </div>
            <img className="linie-37" alt="Linie" src="/img/linie-2-22.png" />
            <div className="gruppe-101">
              <Link className="text-wrapper-239" to="/blog">
                Blog{" "}
              </Link>
            </div>
          </div>
        </footer>
        <div className="navbar-12">
          <div className="overlap-75">
            <img className="icon-black-17" alt="Icon black" src="/img/icon-black-29.png" />
            <div className="blackbackground-17" />
            <Link className="text-wrapper-242" to="/shop">
              Products
            </Link>
            <img className="user-17" alt="User" src="/img/user-128-24.png" />
            <img className="element-17" alt="Element" src="/img/629578-200-24.png" />
            <Link to="/shoppingcart">
              <img
                className="element-cart-17"
                alt="Element cart"
                src="/img/231-2317666-cart-icon-moving-shopping-cart-icon-24.png"
              />
            </Link>
            <Link className="gruppe-102" to="/home">
              <div className="icon-white-17" />
            </Link>
            <img className="linie-38" alt="Linie" src="/img/linie-3-24.png" />
            <Link className="requests-17" to="/taskboard">
              Requests
              <br />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
