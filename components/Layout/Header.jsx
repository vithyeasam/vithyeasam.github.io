import React from 'react';
import Image from 'next/image';

function Header() {
    return (
        <header className="navbar navbar-sticky navbar-expand-lg navbar-dark">
        <div className="container position-relative">
          <a className="navbar-brand" href="index.html">
            <img
              className="navbar-brand-regular"
              src="/assets/img/logo/logo-klahan-text.png"
              alt="brand-logo"
              // width="100%" height="100%" layout="fixed"
            />
            <img
              className="navbar-brand-sticky"
              src="/assets/img/logo/klahan-logos.png"
              alt="sticky brand-logo"
              // width="100%" height="100%" layout="fixed" objectFit="contain"
            />
          </a>
          <button
            className="navbar-toggler d-lg-none"
            type="button"
            data-toggle="navbarToggler"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="navbar-inner">
            {/*  Mobile Menu Toggler */}
            <button
              className="navbar-toggler d-lg-none"
              type="button"
              data-toggle="navbarToggler"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <nav>
              <ul className="navbar-nav" id="navbar-nav">
                <li className="nav-item dropdown">
                  <a
                    className="nav-link"
                    href="javascript:;"
                    id="navbarDropdownMenuLink"
                    // data-toggle="dropdown"
                    // aria-haspopup="true"
                    // aria-expanded="false"
                  >
                    Home
                  </a>
                  {/* <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdownMenuLink"
                  >
                    <li>
                      <a className="dropdown-item" href="index.html">
                        Homepage-1
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="index-2.html">
                        Homepage-2
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="index-3.html">
                        Homepage-3
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="index-4.html">
                        Homepage-4
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="index-5.html">
                        Homepage-5
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="index-6.html">
                        Homepage-6
                      </a>
                    </li>
                  </ul> */}
                </li>
                <li className="nav-item">
                  <a className="nav-link scroll" href="#features">
                    Features
                  </a>
                </li>
                {/* <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="javascript:;"
                    id="navbarDropdownMenuLink"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Pages
                  </a>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdownMenuLink"
                  >
                    <li className="dropdown-submenu">
                      <a
                        className="dropdown-item dropdown-toggle"
                        href="javascript:;"
                      >
                        Inner Pages
                        <span className="badge badge-pill badge-warning ml-2">
                          New
                        </span>
                      </a>
                      <ul className="dropdown-menu">
                        <li>
                          <a className="dropdown-item" href="pricing.html">
                            Pricing
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="download.html">
                            Download
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="newsletter.html">
                            Newsletter
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="thank-you.html">
                            Thank you
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="coming-soon.html">
                            Coming Soon
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="404.html">
                            404
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="dropdown-submenu">
                      <a
                        className="dropdown-item dropdown-toggle"
                        href="javascript:;"
                      >
                        Blog Pages
                      </a>
                      <ul className="dropdown-menu">
                        <li>
                          <a className="dropdown-item" href="blog-two-column.html">
                            Blog- 2 Column
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="blog-three-column.html">
                            Blog- 3 Column
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="blog-left-sidebar.html">
                            Blog- Left Sidebar
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="blog-right-sidebar.html">
                            Blog- Right Sidebar
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="dropdown-submenu">
                      <a
                        className="dropdown-item dropdown-toggle"
                        href="javascript:;"
                      >
                        Blog Details
                      </a>
                      <ul className="dropdown-menu">
                        <li>
                          <a
                            className="dropdown-item"
                            href="blog-details-left-sidebar.html"
                          >
                            Blog Details- Left Sidebar
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item"
                            href="blog-details-right-sidebar.html"
                          >
                            Blog Details- Right Sidebar
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="dropdown-submenu">
                      <a
                        className="dropdown-item dropdown-toggle"
                        href="javascript:;"
                      >
                        Accounts
                        <span className="badge badge-pill badge-warning ml-2">
                          New
                        </span>
                      </a>
                      <ul className="dropdown-menu">
                        <li>
                          <a className="dropdown-item" href="login.html">
                            Login
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="signup.html">
                            Signup
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="forgot.html">
                            Reset Password
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a className="dropdown-item" href="reviews.html">
                        Reviews
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="faq.html">
                        FAQ
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="contact.html">
                        Contact
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item disabled" href="#">
                        More Coming Soon
                      </a>
                    </li>
                  </ul>
                </li> */}
                <li className="nav-item">
                  <a className="nav-link scroll" href="#screenshots">
                    Screenshots
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link scroll" href="#pricing">
                    Pricing
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link scroll" href="#contact">
                    Contact
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
    );
}

export default Header;