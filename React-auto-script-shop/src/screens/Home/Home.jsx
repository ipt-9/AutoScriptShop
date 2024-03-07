import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import {UserHub} from "../UserHub";

export const Home = () => {
  return (
      <div className="home">
        <div className="div">
          <footer className="footer">
            <div className="overlap-group">
              <img className="background" alt="Background" src="/img/background-40.png"/>
              <img
                  className="auto-script-shop"
                  alt="Auto script shop"
                  src="/img/auto-script-shop-high-resolution-logo-white-on-transparent-backg-22.png"
              />

              <div className="gruppe">
                <Link className="text-wrapper" to="/about-us">
                  About{" "}
                </Link>
                <Link className="text-wrapper-2" to="/disclamer">
                  Disclaimer
                </Link>
                <Link className="text-wrapper-3" to="/impressum">
                  Impressum
                </Link>
                <Link className="terms-conditions-2" to="/terms-conditions">
                  Terms &amp; Conditions
                  <br/>
                </Link>
              </div>
              <img className="linie" alt="Linie" src="/img/linie-2-22.png"/>
              <div className="gruppe-2">
                <Link className="text-wrapper" to="/blog">
                  Blog{" "}
                </Link>
              </div>
            </div>
          </footer>
          <p className="p">Scroll down to learn more about us.</p>
          <div className="overlap">
            <p className="text-wrapper-4">What is A. S. S. and how does it work?</p>
            <img className="hexagon" alt="Hexagon" src="/img/hexagon.png"/>
            <img className="pfad" alt="Pfad" src="/img/pfad-48.png"/>
          </div>
          <div className="overlap-2">
            <p className="auto-script-shop-2">
            <span className="span">
              Auto Script Shop:
              <br/>
            </span>
              <span className="text-wrapper-5">&nbsp;</span>
            </p>
            <img className="bild" alt="Bild" src="/img/bild-39.png"/>
          </div>
          <p className="we-are-your">
            We are your Marketplace for <br/>
            Custom Scripts and Automations
          </p>
          <div className="navbar">
            <div className="overlap-3">
              <img className="icon-black" alt="Icon black" src="/img/icon-black-29.png"/>
              <div className="blackbackground"/>
              <Link className="text-wrapper-6" to="/shop">
                Products
              </Link>
              <img className="user" alt="User" src="/img/user-128-24.png"/>
              <img className="element" alt="Element" src="/img/629578-200-24.png" />
              <Link to="/shoppingcart">
                <img
                    className="element-cart"
                    alt="Element cart"
                    src="/img/231-2317666-cart-icon-moving-shopping-cart-icon-24.png"
                />
              </Link>
              <div className="icon-white-wrapper">
                <div className="icon-white" />
              </div>
              <img className="img" alt="Linie" src="/img/linie-3-24.png" />
              <Link className="requests" to="/taskboard">
                Requests
                <br />
              </Link>
            </div>
          </div>
          <div className="gruppe-3">
            <Link className="DALLE-wrapper" to="/shop">
              <img
                  className="DALLE"
                  alt="Dalle"
                  src="/img/dall-e-2023-12-21-10-43-35-create-a-minimalistic-square-image.png"
              />
            </Link>
            <div className="gruppe-4">
              <p className="text-wrapper-7">
                Browse through <br />
                finished products here
              </p>
              <div className="text-wrapper-8">OR</div>
              <p className="make-a-request-for-a">
                Make a request
                <br />
                for a personalized script
              </p>
            </div>
            <div className="img-wrapper">
              <img
                  className="DALLE"
                  alt="Dalle"
                  src="/img/dall-e-2023-12-21-10-48-02-create-a-minimalistic-square-image.png"
              />
            </div>
          </div>
          <div className="text-wrapper-9">For all Creators</div>
          <Link className="gruppe-5" to="/taskboard">
            <div className="gruppe-6">
              <img
                  className="DALLE-2"
                  alt="Dalle"
                  src="/img/dall-e-2023-12-21-10-50-02-create-a-minimalistic-square-image.png"
              />
            </div>
            <p className="text-wrapper-7">
              List you Scripts that are <br />
              ready for selling here
            </p>
            <div className="text-wrapper-10">OR</div>
            <p className="browse-through">
              Browse through requests <br />
              to find a Job that suits you
            </p>
            <div className="gruppe-7">
              <img
                  className="DALLE"
                  alt="Dalle"
                  src="/img/dall-e-2023-12-21-10-51-12-create-a-minimalistic-square-image.png"
              />
            </div>
          </Link>
          <Link className="komponente" to="/shop">
            <div className="get-a-product-wrapper">
              <div className="get-a-product">
                Get a Product
                <br />
              </div>
            </div>
          </Link>
          <div className="overlap-wrapper">
            <div className="overlap-4">
              <div className="text-wrapper-11">Make a Request</div>
            </div>
          </div>
          <div className="overlap-group-wrapper">
            <div className="overlap-5">
              <div className="text-wrapper-12">Offer my Product</div>
            </div>
          </div>
          <Link className="komponente-2" to="/taskboard">
            <div className="overlap-6">
              <div className="text-wrapper-13">Work on Request</div>
            </div>
          </Link>
          <div className="text-wrapper-14">For all End-Users </div>
          <img className="triangle" alt="Triangle" src="/img/triangle.png" />
          <img className="right-arrow" alt="Right arrow" src="/img/right-arrow.png" />
        </div>
      </div>
  );
};
