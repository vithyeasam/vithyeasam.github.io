import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Body from "./Body";

export default function Layout({children}) {
  return (
    <>
    {children}
      <div id="scrollUp" title="Scroll To Top">
        <i className="fas fa-arrow-up"></i>
      </div>
      <div className="main">
        <Header />
        <Body />
        <div className="height-emulator d-none d-lg-block"></div>
        <Footer />
      </div>
    </>
  );
}
