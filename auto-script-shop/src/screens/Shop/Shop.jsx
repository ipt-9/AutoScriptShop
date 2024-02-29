import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

export const Shop = () => {
  return (
    <div className="shop">
      <div className="div-4">
        <div className="div-5">
          <img className="icon-black-3" alt="Icon black" src="/img/icon-black-29.png" />
          <div className="div-5">
            <div className="overlap-group-7">
              <img className="icon-black-3" alt="Icon black" src="/img/icon-black-29.png" />
              <div className="blackbackground-3" />
              <div className="text-wrapper-38">Products</div>
              <img className="user-3" alt="User" src="/img/user-128-24.png" />
              <img className="element-3" alt="Element" src="/img/629578-200-24.png" />
              <Link to="/shoppingcart">
                <img
                  className="element-cart-3"
                  alt="Element cart"
                  src="/img/231-2317666-cart-icon-moving-shopping-cart-icon-24.png"
                />
              </Link>
              <Link className="gruppe-32" to="/home">
                <div className="icon-white-3" />
              </Link>
              <img className="linie-5" alt="Linie" src="/img/linie-3-24.png" />
              <Link className="requests-3" to="/taskboard">
                Requests
                <br />
              </Link>
            </div>
          </div>
        </div>
        <div className="gruppe-33">
          <div className="filter-6">
            <div className="text-wrapper-39">Freelancer Rating</div>
            <div className="gruppe-34">
              <div className="gruppe-35">
                <div className="ellipse-7" />
                <div className="text-wrapper-40">Enable</div>
                <div className="text-wrapper-41">1-5</div>
              </div>
            </div>
          </div>
          <div className="filter-7">
            <div className="gruppe-36">
              <div className="filter-8">Language</div>
              <div className="text-wrapper-42">Power Shell</div>
              <div className="text-wrapper-43">Python</div>
              <div className="text-wrapper-44">C#</div>
              <div className="text-wrapper-45">PHP</div>
              <div className="text-wrapper-46">CSS</div>
              <div className="ellipse-8" />
              <div className="ellipse-9" />
              <div className="ellipse-10" />
              <div className="ellipse-11" />
              <img className="pfad-10" alt="Pfad" src="/img/pfad-5-2.png" />
            </div>
          </div>
          <div className="filter-9">
            <div className="text-wrapper-47">Type</div>
            <div className="overlap-group-8">
              <div className="gruppe-37">
                <div className="text-wrapper-48">Backend Solutions</div>
                <div className="filter-web-template-2">
                  <div className="text-wrapper-49">Web Template</div>
                  <div className="komponente-8" />
                </div>
                <div className="text-wrapper-50">Framework</div>
                <div className="text-wrapper-51">Setup Scripts</div>
                <div className="text-wrapper-52">Frontend Solutions</div>
              </div>
              <div className="komponente-9" />
              <div className="komponente-10" />
              <div className="komponente-11" />
              <div className="komponente-12" />
            </div>
            <div className="filter-automation-2">
              <div className="text-wrapper-49">Automation Scripts</div>
              <div className="rechteck-2" />
            </div>
          </div>
          <div className="filter-10">
            <div className="overlap-13">
              <div className="price-range-2">
                Price Range
                <br />
              </div>
              <div className="gruppe-38">
                <div className="overlap-14">
                  <img className="linie-6" alt="Linie" src="/img/linie-1-1.png" />
                  <div className="ellipse-12" />
                  <img className="pfad-11" alt="Pfad" src="/img/pfad-33-1.png" />
                  <div className="gruppe-39">
                    <div className="overlap-group-9">
                      <div className="text-wrapper-53">Max</div>
                    </div>
                    <img className="polygon-2" alt="Polygon" src="/img/polygon-1-3.png" />
                  </div>
                  <div className="gruppe-40">
                    <div className="overlap-group-9">
                      <div className="text-wrapper-53">Min</div>
                    </div>
                    <img className="polygon-2" alt="Polygon" src="/img/polygon-1-3.png" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="didn-t-find-what-you-wrapper">
          <Link to="/create-profile-1">
            <p className="didn-t-find-what-you">
              <span className="text-wrapper-54">Didn&#39;t find what you were looking for? Place an order </span>
              <span className="text-wrapper-55">here</span>
            </p>
          </Link>
        </div>
        <footer className="footer-3">
          <div className="overlap-15">
            <img className="background-3" alt="Background" src="/img/background-40.png" />
            <Link to="/home">
              <img
                className="auto-script-shop-4"
                alt="Auto script shop"
                src="/img/auto-script-shop-high-resolution-logo-white-on-transparent-backg-22.png"
              />
            </Link>
            <div className="gruppe-41">
              <Link className="text-wrapper-56" to="/about-us">
                About{" "}
              </Link>
              <Link className="text-wrapper-57" to="/disclamer">
                Disclaimer
              </Link>
              <Link className="text-wrapper-58" to="/impressum">
                Impressum
              </Link>
              <Link className="terms-conditions-4" to="/terms-conditions">
                Terms &amp; Conditions
                <br />
              </Link>
            </div>
            <img className="linie-7" alt="Linie" src="/img/linie-2-22.png" />
            <div className="gruppe-42">
              <Link className="text-wrapper-56" to="/blog">
                Blog{" "}
              </Link>
            </div>
          </div>
        </footer>
        <div className="gruppe-43">
          <div className="overlap-16">
            <div className="product-pannel">
              <div className="text-wrapper-59">RoboRhythms</div>
              <img className="bild-2" alt="Bild" src="/img/bild-50.png" />
            </div>
            <p className="package-management">
              - Package Management
              <br />- Customizable Scheduling
              <br />- Version Control
            </p>
            <p className="logging-and">
              - Logging and Notifications
              <br />- Backup and Rollback
            </p>
            <p className="price-CHF">
              <span className="text-wrapper-60">Price:</span>
              <span className="text-wrapper-61"> CHF 25</span>
            </p>
          </div>
          <div className="overlap-17">
            <div className="product-pannel">
              <div className="text-wrapper-59">PrecisionCode</div>
              <img className="bild-2" alt="Bild" src="/img/bild-45.png" />
            </div>
            <p className="package-management-2">
              - Package Management
              <br />- Customizable Scheduling
              <br />- Version Control
            </p>
            <p className="logging-and-2">
              - Logging and Notifications
              <br />- Backup and Rollback
            </p>
            <p className="price-CHF-2">
              <span className="text-wrapper-60">Price:</span>
              <span className="text-wrapper-61"> CHF 25</span>
            </p>
          </div>
          <div className="overlap-18">
            <div className="product-pannel">
              <div className="text-wrapper-59">CodeHarmony</div>
              <img className="bild-2" alt="Bild" src="/img/bild-41.png" />
            </div>
            <p className="package-management-3">
              - Package Management
              <br />- Customizable Scheduling
              <br />- Version Control
            </p>
            <p className="logging-and-3">
              - Logging and Notifications
              <br />- Backup and Rollback
            </p>
            <p className="price-CHF-3">
              <span className="text-wrapper-60">Price:</span>
              <span className="text-wrapper-61"> CHF 25</span>
            </p>
          </div>
          <div className="overlap-19">
            <div className="product-pannel">
              <div className="text-wrapper-62">
                ScriptWiz <br />
                Automate
              </div>
              <img className="bild-2" alt="Bild" src="/img/bild-48.png" />
            </div>
            <p className="package-management-4">
              - Package Management
              <br />- Customizable Scheduling
              <br />- Version Control
            </p>
            <p className="logging-and-4">
              - Logging and Notifications
              <br />- Backup and Rollback
            </p>
            <p className="price-CHF-4">
              <span className="text-wrapper-60">Price:</span>
              <span className="text-wrapper-61"> CHF 25</span>
            </p>
          </div>
          <div className="overlap-20">
            <div className="product-pannel">
              <div className="text-wrapper-62">
                Autopilot
                <br />
                Scripter
              </div>
            </div>
            <img className="bild-3" alt="Bild" src="/img/bild-51.png" />
            <p className="package-management-5">
              - Package Management
              <br />- Customizable Scheduling
              <br />- Version Control
            </p>
            <p className="logging-and-5">
              - Logging and Notifications
              <br />- Backup and Rollback
            </p>
            <p className="price-CHF-5">
              <span className="text-wrapper-60">Price:</span>
              <span className="text-wrapper-61"> CHF 25</span>
            </p>
          </div>
        </div>
        <Link className="gruppe-44" to="/product-spesific-1">
          <div className="overlap-21">
            <p className="package-management-6">
              - Package Management
              <br />- Customizable Scheduling
              <br />- Version Control
            </p>
            <p className="logging-and-6">
              - Logging and Notifications
              <br />- Backup and Rollback
            </p>
            <p className="price-CHF-6">
              <span className="text-wrapper-60">Price:</span>
              <span className="text-wrapper-61"> CHF 25</span>
            </p>
            <div className="bakcground-2" />
            <div className="autoadmin-pro">
              AutoAdmin
              <br />
              Pro
            </div>
            <p className="package-management-6">
              - Package Management
              <br />- Customizable Scheduling
              <br />- Version Control
            </p>
            <p className="logging-and-6">
              - Logging and Notifications
              <br />- Backup and Rollback
            </p>
            <p className="price-CHF-6">
              <span className="text-wrapper-60">Price:</span>
              <span className="text-wrapper-61"> CHF 25</span>
            </p>
            <img className="bild-4" alt="Bild" src="/img/bild-22.png" />
          </div>
        </Link>
        <div className="gruppe-45">
          <div className="text-wrapper-63">
            TaskTamer
            <br />
            Script
          </div>
          <img className="bild-5" alt="Bild" src="/img/bild-19.png" />
          <p className="timetable">
            - Timetable
            <br />- Customizable Scheduling
            <br />- Automation
          </p>
          <div className="text-wrapper-64">- Visual task board</div>
          <p className="price-CHF-7">
            <span className="text-wrapper-60">Price:</span>
            <span className="text-wrapper-61"> CHF 10</span>
          </p>
        </div>
        <div className="gruppe-46">
          <div className="overlap-21">
            <div className="product-pannel">
              <div className="text-wrapper-63">
                DataDynamo
                <br />
                Script
              </div>
              <img className="bild-2" alt="Bild" src="/img/bild-18.png" />
            </div>
            <p className="data-analyze-data">
              - Data Analyze
              <br />- Data Management
              <br />- Version Control
            </p>
            <div className="text-wrapper-65">- Backup and Rollback</div>
            <p className="price-CHF-8">
              <span className="text-wrapper-60">Price:</span>
              <span className="text-wrapper-61"> CHF 40</span>
            </p>
          </div>
        </div>
        <div className="gruppe-47">
          <div className="overlap-21">
            <div className="product-pannel">
              <div className="text-wrapper-63">
                Streamline
                <br />
                Master
              </div>
              <img className="bild-6" alt="Bild" src="/img/bild-17.png" />
            </div>
            <p className="package-management">
              - Package Management
              <br />- Customizable Scheduling
              <br />- Version Control
            </p>
            <p className="logging-and">
              - Logging and Notifications
              <br />- Backup and Rollback
            </p>
            <p className="price-CHF">
              <span className="text-wrapper-60">Price:</span>
              <span className="text-wrapper-61"> CHF 100</span>
            </p>
          </div>
        </div>
        <div className="gruppe-48">
          <div className="overlap-21">
            <div className="product-pannel">
              <div className="text-wrapper-63">
                Automagic
                <br />
                Flow
              </div>
              <img className="bild-7" alt="Bild" src="/img/bild-44.png" />
            </div>
            <p className="package-management-7">
              - Package Management
              <br />- Customizable Scheduling
              <br />- Version Control
            </p>
            <p className="logging-and-7">
              - Logging and Notifications
              <br />- Backup and Rollback
            </p>
            <p className="price-CHF-9">
              <span className="text-wrapper-60">Price:</span>
              <span className="text-wrapper-61"> CHF 20</span>
            </p>
          </div>
        </div>
        <div className="gruppe-49">
          <div className="overlap-22">
            <div className="product-pannel">
              <div className="text-wrapper-63">
                AutoFlow
                <br />
                Master
              </div>
              <img className="bild-8" alt="Bild" src="/img/bild-49.png" />
            </div>
            <p className="package-management-8">
              - Package Management
              <br />- Customizable Scheduling
              <br />- Version Control
            </p>
            <p className="logging-and-8">
              - Logging and Notifications
              <br />- Backup and Rollback
            </p>
            <p className="price-CHF-10">
              <span className="text-wrapper-60">Price:</span>
              <span className="text-wrapper-61">
                {" "}
                CHF 10
                <br />
              </span>
            </p>
          </div>
        </div>
        <div className="gruppe-50">
          <div className="overlap-21">
            <div className="product-pannel">
              <div className="text-wrapper-63">
                Efficiency
                <br />
                Scripter
              </div>
              <img className="bild-2" alt="Bild" src="/img/bild-23.png" />
            </div>
            <p className="package-management-9">
              - Package Management
              <br />- Customizable Scheduling
              <br />- Version Control
            </p>
            <p className="logging-and-9">
              - Logging and Notifications
              <br />- Backup and Rollback
            </p>
            <p className="price-CHF-6">
              <span className="text-wrapper-60">Price:</span>
              <span className="text-wrapper-61"> CHF 120</span>
            </p>
          </div>
        </div>
        <div className="gruppe-51">
          <div className="overlap-21">
            <div className="product-pannel">
              <div className="text-wrapper-63">
                LogicFlow
                <br />
                Script
              </div>
              <img className="bild-2" alt="Bild" src="/img/bild-47.png" />
            </div>
            <p className="package-management-10">
              - Package Management
              <br />- Customizable Scheduling
              <br />- Version Control
            </p>
            <p className="logging-and-10">
              - Logging and Notifications
              <br />- Backup and Rollback
            </p>
            <p className="price-CHF-11">
              <span className="text-wrapper-60">Price:</span>
              <span className="text-wrapper-61"> CHF 25</span>
            </p>
          </div>
        </div>
        <div className="gruppe-52">
          <div className="overlap-22">
            <div className="product-pannel">
              <div className="text-wrapper-59">ScriptBot Pro</div>
              <img className="bild-2" alt="Bild" src="/img/bild-52.png" />
            </div>
            <p className="package-management-11">
              - Package Management
              <br />- Customizable Scheduling
              <br />- Version Control
            </p>
            <p className="logging-and-11">
              - Logging and Notifications
              <br />- Backup and Rollback
            </p>
            <p className="price-CHF-12">
              <span className="text-wrapper-60">Price:</span>
              <span className="text-wrapper-61"> CHF 25</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
