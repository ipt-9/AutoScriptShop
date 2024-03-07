import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

export const ProductSpesific = () => {
  return (
    <div className="product-spesific">
      <div className="div-16">
        <div className="div-17">
          <img className="icon-black-10" alt="Icon black" src="/img/icon-black-29.png" />
          <div className="div-17">
            <div className="overlap-47">
              <img className="icon-black-10" alt="Icon black" src="/img/icon-black-29.png" />
              <div className="blackbackground-10" />
              <Link className="text-wrapper-142" to="/shop">
                Products
              </Link>
              <img className="user-10" alt="User" src="/img/user-128-24.png" />
              <img className="element-10" alt="Element" src="/img/629578-200-24.png" />
              <Link to="/shoppingcart">
                <img
                  className="element-cart-10"
                  alt="Element cart"
                  src="/img/231-2317666-cart-icon-moving-shopping-cart-icon-24.png"
                />
              </Link>
              <Link className="gruppe-71" to="/home">
                <div className="icon-white-10" />
              </Link>
              <img className="linie-20" alt="Linie" src="/img/linie-3-24.png" />
              <Link className="requests-10" to="/taskboard">
                Requests
                <br />
              </Link>
            </div>
          </div>
        </div>
        <p className="description-the">
          <span className="text-wrapper-143">
            Description
            <br />
          </span>
          <span className="text-wrapper-144">
            The Database Integration Script should be employed
            <br />
            as an essential tool for facilitating seamless connections
            <br />
            and data synchronization across various databases.
            <br />
            This script should streamline the data migration process,
            <br />
            ensuring efficiency and precision in information transfer.
            <br />
            Its user-friendly interface and robust functionality
            <br />
            should simplify database integration, promoting smooth
            <br /> collaboration and maintaining data consistency across
            <br />
            diverse platforms.
          </span>
        </p>
        <p className="reward-CHF-likes">
          <span className="text-wrapper-143">Reward</span>
          <span className="text-wrapper-145">: </span>
          <span className="text-wrapper-146">
            CHF 40
            <br />
          </span>
          <span className="text-wrapper-147">
            <br />
          </span>
          <span className="text-wrapper-143">Likes: </span>
          <span className="text-wrapper-146">1145</span>
        </p>
        <p className="requirements">
          <span className="text-wrapper-143">
            Requirements
            <br />
          </span>
          <span className="text-wrapper-148">
            <br />- Compatibility: Support popular databases like MySQL, PostgreSQL, and MongoDB.
            <br />- Data Mapping: Enable flexible mapping for accurate data transfer.
            <br />- Security: Implement secure data transmission and user authentication.
            <br />- Error Handling: Provide robust error handling and detailed logs.
            <br />- Automation: Support automated scheduling for routine tasks.
            <br />- Scalability: Scale to handle growing data volumes and evolving structures.
            <br />- User Interface: Offer a user-friendly interface for easy configuration and monitoring.
            <br />- Documentation: Provide comprehensive setup, usage, and troubleshooting documentation.
            <br />
          </span>
        </p>
        <footer className="footer-10">
          <div className="overlap-group-17">
            <img className="background-13" alt="Background" src="/img/background-40.png" />
            <Link to="/home">
              <img
                className="auto-script-shop-11"
                alt="Auto script shop"
                src="/img/auto-script-shop-high-resolution-logo-white-on-transparent-backg-22.png"
              />
            </Link>
            <div className="gruppe-72">
              <Link className="text-wrapper-149" to="/about-us">
                About{" "}
              </Link>
              <Link className="text-wrapper-150" to="/disclamer">
                Disclaimer
              </Link>
              <Link className="text-wrapper-151" to="/impressum">
                Impressum
              </Link>
              <Link className="terms-conditions-9" to="/terms-conditions">
                Terms &amp; Conditions
                <br />
              </Link>
            </div>
            <img className="linie-21" alt="Linie" src="/img/linie-2-22.png" />
            <div className="gruppe-73">
              <Link className="text-wrapper-149" to="/blog">
                Blog{" "}
              </Link>
            </div>
          </div>
        </footer>
        <div className="text-wrapper-152">DB Integration</div>
        <img className="linie-22" alt="Linie" src="/img/linie-4.png" />
        <img className="linie-23" alt="Linie" src="/img/pfad-47.png" />
        <div className="loginfield">
          <p className="text-wrapper-153">Contact to Take the Task</p>
        </div>
        <div className="gruppe-74">
          <p className="text-wrapper-154">- John J. U. Green</p>
        </div>
        <div className="text-wrapper-155">Asked by</div>
      </div>
    </div>
  );
};
