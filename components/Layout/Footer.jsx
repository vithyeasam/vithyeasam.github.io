import React from "react";
import Link from "next/link";

function Footer(props) {
  return (
    <footer className="footer-area footer-fixed">
      <div className="footer-top ptb_100">
        <div className="container">
          <div className="row">
            <div className="col-12 col-sm-6 col-lg-3">
              <div className="footer-items">
                <a className="navbar-brand" href="#">
                  <img
                    className="logo"
                    src="/assets/img/logo/logo-klahan.png"
                    alt=""
                  />
                </a>
                <p className="mt-2 mb-3">
                  HR solutions that allow you to do more business and less HR.
                  Let you get focused on people development and performance.
                </p>

                <div className="social-icons d-flex">
                  <Link href="https://web.facebook.com/KlahanHR">
                    <a className="facebook" target="_blank">
                      <i className="fab fa-facebook-f" />
                      <i className="fab fa-facebook-f" />
                    </a>
                  </Link>
                  {/* <a className="twitter" href="#">
                    <i className="fab fa-twitter" />
                    <i className="fab fa-twitter" />
                  </a>
                  <a className="google-plus" href="#">
                    <i className="fab fa-google-plus-g" />
                    <i className="fab fa-google-plus-g" />
                  </a>
                  <a className="vine" href="#">
                    <i className="fab fa-vine" />
                    <i className="fab fa-vine" />
                  </a> */}
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-lg-3">
              {/* Footer Items */}
              <div className="footer-items">
                {/* Footer Title */}
                <h3 className="footer-title mb-2">Useful Links</h3>
                <ul>
                  <li className="py-2">
                    <a href="#">Home</a>
                  </li>
                  <li className="py-2">
                    <a href="#features">Features</a>
                  </li>
                  <li className="py-2">
                    <a href="#screenshots">Screenshots</a>
                  </li>
                  <li className="py-2">
                    <a href="#pricing">Pricing</a>
                  </li>
                  <li className="py-2">
                    <a href="#contact">Contact</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-lg-3">
              {/* Footer Items */}
              <div className="footer-items">
                {/* Footer Title */}
                <h3 className="footer-title mb-2">Product Help</h3>
                <ul>
                  <li className="py-2">
                    <a href="#">FAQ</a>
                  </li>
                  <li className="py-2">
                    <a href="#">Privacy Policy</a>
                  </li>
                  <li className="py-2">
                    <a href="#">Support</a>
                  </li>
                  <li className="py-2">
                    <a href="#">Terms &amp; Conditions</a>
                  </li>
                  <li className="py-2">
                    <a href="#">Contact</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-lg-3">
              {/* Footer Items */}
              <div className="footer-items">
                {/* Footer Title */}
                <h3 className="footer-title mb-2">Download</h3>
                {/* Store Buttons */}
                <div className="button-group store-buttons store-black d-flex flex-wrap">
                  <Link href="https://play.google.com/store/apps/details?id=com.mediaload.Klahan&hl=en&gl=US">
                    <a target="_blank">
                      <img
                        src="/assets/img/icon/google-play-black.png"
                        alt=""
                        width="100%"
                        height="100%"
                        layout="responsive"
                        objectFit="contain"
                      />
                    </a>
                  </Link>
                  <Link href="https://apps.apple.com/kh/app/klahan/id1569777426">
                    <a target="_blank">
                      <img
                        src="/assets/img/icon/app-store-black.png"
                        alt=""
                        width="100%"
                        height="100%"
                        layout="responsive"
                        objectFit="contain"
                      />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Footer Bottom */}
      <div className="footer-bottom">
        <div className="container">
          <div className="row">
            <div className="col-12">
              {/* Copyright Area */}
              <div className="copyright-area d-flex flex-wrap justify-content-center justify-content-sm-between text-center py-4">
                {/* Copyright Left */}
                <div className="copyright-left">
                  © Copyrights 2022 Klahan All rights reserved.
                </div>
                {/* Copyright Right */}
                {/* <div className="copyright-right">
                  Made with <i className="fas fa-heart" /> By{" "}
                  <a href="#">Theme Land</a>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
