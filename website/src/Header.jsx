import React from "react";
import { Link } from "react-router-dom";


export default function Header() {
  return (
    <div>
      <header className="header-area header-sticky">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <nav className="main-nav">
                {/* ***** Logo Start ***** */}
                <a href="index.html" className="logo">
                  <h1>Villa</h1>
                </a>
                {/* ***** Logo End ***** */}
                {/* ***** Menu Start ***** */}
                <ul className="nav">
                  <li>
                    <Link to="/" href="index.html" className="active">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link to="/Properties"  href="properties.html">Properties</Link>
                  </li>
                  <li>
                    <Link to="/PropertyDetails" href="property-details.html">Property Details</Link>
                  </li>
                  <li>
                    <Link to="/ContactUs" href="contact.html">Contact Us</Link>
                  </li>
                  <li>
                    <Link href="#">
                      <i className="fa fa-calendar" /> Schedule a visit
                    </Link>
                  </li>
                </ul>
                <a className="menu-trigger">
                  <span>Menu</span>
                </a>
                {/* ***** Menu End ***** */}
              </nav>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
