import React from "react";
import Link from "next/link";
function Body(props) {
  return (
    <div>
      <>
        <section
          id="home"
          className="section welcome-area bg-overlay overflow-hidden d-flex align-items-center"
        >
          <div className="container">
            <div className="row align-items-center">
              {/* Welcome Intro Start */}
              <div className="col-12 col-md-7 col-lg-6">
                <div className="welcome-intro">
                  <h1 className="text-white">Klahan</h1>
                  <p className="text-white my-4">
                    HR solutions that allow you to do more business and less HR.
                    Let you get focused on people development and performance.
                  </p>
                  {/* Store Buttons */}
                  <div className="button-group store-buttons d-flex">
                    <Link  href="https://play.google.com/store/apps/details?id=com.mediaload.Klahan&hl=en&gl=US">
                    <a target="_blank">
                      <img src="assets/img/icon/google-play.png" alt="" />
                    </a>
                    </Link>
                    <Link href="https://apps.apple.com/kh/app/klahan/id1569777426">
                    <a target="_blank">
                      <img src="assets/img/icon/app-store.png" alt="" />
                    </a>
                    </Link>
                  </div>
                  <span className="d-inline-block text-white fw-3 font-italic mt-3">
                    * Available on iPhone, iPad and all Android devices
                  </span>
                </div>
              </div>
              <div className="col-12 col-md-5 col-lg-6">
                {/* Welcome Thumb */}
                <div
                  className="welcome-thumb mx-auto"
                  data-aos="fade-left"
                  data-aos-delay={500}
                  data-aos-duration={1000}
                >
                  <img src="assets/img/welcome/welcome.png" alt="" />
                </div>
              </div>
            </div>
          </div>
          {/* Shape Bottom */}
          <div className="shape-bottom">
            <svg
              viewBox="0 0 1920 310"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              className="svg replaced-svg"
            >
              <title>sApp Shape</title>
              <desc>Created with Sketch</desc>
              <defs />
              <g
                id="sApp-Landing-Page"
                stroke="none"
                strokeWidth={1}
                fill="none"
                fillRule="evenodd"
              >
                <g
                  id="sApp-v1.0"
                  transform="translate(0.000000, -554.000000)"
                  fill="#FFFFFF"
                >
                  <path
                    d="M-3,551 C186.257589,757.321118 319.044414,856.322454 395.360475,848.004007 C509.834566,835.526337 561.525143,796.329212 637.731734,765.961549 C713.938325,735.593886 816.980646,681.910577 1035.72208,733.065469 C1254.46351,784.220361 1511.54925,678.92359 1539.40808,662.398665 C1567.2669,645.87374 1660.9143,591.478574 1773.19378,597.641868 C1848.04677,601.75073 1901.75645,588.357675 1934.32284,557.462704 L1934.32284,863.183395 L-3,863.183395"
                    id="sApp-v1.0"
                  />
                </g>
              </g>
            </svg>
          </div>
        </section>
        {/* ***** Welcome Area End ***** */}
        {/* ***** Counter Area Start ***** */}
        <section className="section counter-area ptb_50">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-5 col-sm-3 single-counter text-center">
                <div className="counter-inner p-3 p-md-0">
                  {/* Counter Item */}
                  <div className="counter-item d-inline-block mb-3">
                    <span className="counter fw-7">10</span>
                    <span className="fw-7">M</span>
                  </div>
                  <h5>Users</h5>
                </div>
              </div>
              <div className="col-5 col-sm-3 single-counter text-center">
                <div className="counter-inner p-3 p-md-0">
                  {/* Counter Item */}
                  <div className="counter-item d-inline-block mb-3">
                    <span className="counter fw-7">23</span>
                    <span className="fw-7">K</span>
                  </div>
                  <h5>Download</h5>
                </div>
              </div>
              <div className="col-5 col-sm-3 single-counter text-center">
                <div className="counter-inner p-3 p-md-0">
                  {/* Counter Item */}
                  <div className="counter-item d-inline-block mb-3">
                    <span className="counter fw-7">9</span>
                    <span className="fw-7">M</span>
                  </div>
                  <h5>Customer</h5>
                </div>
              </div>
              <div className="col-5 col-sm-3 single-counter text-center">
                <div className="counter-inner p-3 p-md-0">
                  {/* Counter Item */}
                  <div className="counter-item d-inline-block mb-3">
                    <span className="counter fw-7">12</span>
                    <span className="fw-7">K</span>
                  </div>
                  <h5>Developer</h5>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* ***** Counter Area End ***** */}
        {/* ***** Features Area Start ***** */}
        <section
          id="features"
          className="section features-area style-two overflow-hidden ptb_100"
        >
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-12 col-md-10 col-lg-8">
                {/* Section Heading */}
                <div className="section-heading text-center">
                  <span className="d-inline-block rounded-pill shadow-sm fw-5 px-4 py-2 mb-3">
                    <i className="far fa-lightbulb text-primary mr-1" />
                    <span className="text-primary">Premium </span>
                    Features
                  </span>
                  <h2>What Makes Klahan Different?</h2>
                  <p className="d-none d-sm-block mt-4">
                    We focused on three important factors that matter the most
                    based on several years of experience working with major HR
                    departments.
                  </p>
                  {/* <p class="d-block d-sm-none mt-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum obcaecati.</p> */}
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12 col-md-6 col-lg-4 res-margin">
                {/* Image Box */}
                <div
                  className="image-box text-center icon-1 p-5 wow fadeInLeft"
                  data-wow-delay="0.4s"
                >
                  {/* Featured Image */}
                  <div className="featured-img mb-3">
                    <img
                      className="avatar-sm"
                      src="assets/img/icon/featured-img/layers.png"
                      alt=""
                    />
                  </div>
                  {/* Icon Text */}
                  <div className="icon-text">
                    <h3 className="mb-2">Transparency</h3>
                    <p>
                      Avoid unnecessary tension between HR department and
                      employees resulting from lack of real-time information.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-4 res-margin">
                {/* Image Box */}
                <div
                  className="image-box text-center icon-1 p-5 wow fadeInUp"
                  data-wow-delay="0.2s"
                >
                  {/* Featured Image */}
                  <div className="featured-img mb-3">
                    <img
                      className="avatar-sm"
                      src="assets/img/icon/featured-img/speak.png"
                      alt=""
                    />
                  </div>
                  {/* Icon Text */}
                  <div className="icon-text">
                    <h3 className="mb-2">Automation</h3>
                    <p>
                      Fast, flexible and accurate recording of HR data such as
                      attendance and automatic generation of logs and lists .
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-4">
                {/* Image Box */}
                <div
                  className="image-box text-center icon-1 p-5 wow fadeInRight"
                  data-wow-delay="0.4s"
                >
                  {/* Featured Image */}
                  <div className="featured-img mb-3">
                    <img
                      className="avatar-sm"
                      src="assets/img/icon/featured-img/lock.png"
                      alt=""
                    />
                  </div>
                  {/* Icon Text */}
                  <div className="icon-text">
                    <h3 className="mb-2">Efficiency</h3>
                    <p>No expensive hardware is required.</p>
                    <p>&nbsp;</p>
                    <p>&nbsp;</p>
                    <p>&nbsp;</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* ***** Features Area End ***** */}
        {/* ***** Service Area Start ***** */}
        <section className="section service-area bg-gray overflow-hidden ptb_100">
          <div className="container">
            <div className="row justify-content-between">
              <div className="col-12 col-lg-6 order-2 order-lg-1">
                {/* Service Text */}
                <div className="service-text pt-4 pt-lg-0">
                  <h2 className="text-capitalize mb-4">
                    Klahan App For Employees Providing Real-Time Information
                  </h2>
                  {/* Service List */}
                  <ul className="service-list">
                    {/* Single Service */}
                    <li className="single-service media py-2">
                      <div className="service-icon pr-4">
                        <span>
                          <i className="fab fa-buffer" />
                        </span>
                      </div>
                      <div
                        className="service-text media-body"
                        style={{ marginTop: 15 }}
                      >
                        <p>Scan Attendance. Check Attendance Information.</p>
                      </div>
                    </li>
                    {/* Single Service */}
                    <li className="single-service media py-2">
                      <div className="service-icon pr-4">
                        <span>
                          <i className="fas fa-brush" />
                        </span>
                      </div>
                      <div
                        className="service-text media-body"
                        style={{ marginTop: 15 }}
                      >
                        <p>Salary details. Leave request. OT request.</p>
                      </div>
                    </li>
                    {/* Single Service */}
                    <li className="single-service media py-2">
                      <div className="service-icon pr-4">
                        <span>
                          <i className="fas fa-burn" />
                        </span>
                      </div>
                      <div
                        className="service-text media-body"
                        style={{ marginTop: 15 }}
                      >
                        <p>Receive company’s memo.</p>
                      </div>
                    </li>
                    {/* Single Service */}
                    <li className="single-service media py-2">
                      <div className="service-icon pr-4">
                        <span>
                          <i className="fas fa-cart-arrow-down" />
                        </span>
                      </div>
                      <div
                        className="service-text media-body"
                        style={{ marginTop: 15 }}
                      >
                        <p>Write feedback to the company.</p>
                      </div>
                    </li>
                  </ul>
                  {/* <a href="#" className="btn btn-bordered mt-4">
                    Learn More
                  </a> */}
                </div>
              </div>
              <div className="col-12 col-lg-4 order-1 order-lg-2 d-none d-lg-block">
                {/* Service Thumb */}
                <div className="service-thumb mx-auto">
                  <img src="assets/img/features/thumb-2.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* ***** Service Area End ***** */}
        {/* ***** Discover Area Start ***** */}
        <section className="section discover-area overflow-hidden ptb_100">
          <div className="container">
            <div className="row justify-content-between">
              <div className="col-12 col-lg-6 order-2 order-lg-1">
                {/* Discover Thumb */}
                <div className="service-thumb discover-thumb mx-auto pt-5 pt-lg-0">
                  <img src="assets/img/discover/phoneshadow.png" alt="" />
                </div>
              </div>
              <div className="col-12 col-lg-6 order-1 order-lg-2">
                {/* Discover Text */}
                <div className="discover-text pt-4 pt-lg-0">
                  <h2 className="pb-4 pb-sm-0">
                    Klahan Backend For Employer To Manage Employees and Set
                    Internal Rules
                  </h2>
                  <p className="d-none d-sm-block pt-3 pb-4">
                    Payroll list can be generated in a second. Manage leave
                    requested by employees from a screen.
                  </p>
                  {/* Check List */}
                  <ul className="check-list">
                    <li className="py-1">
                      {/* List Box */}
                      <div className="list-box media">
                        <span className="icon align-self-center">
                          <i className="fas fa-check" />
                        </span>
                        <span className="media-body pl-3">
                          Manage employees’ OT from a screen.
                        </span>
                      </div>
                    </li>
                    <li className="py-1">
                      {/* List Box */}
                      <div className="list-box media">
                        <span className="icon align-self-center">
                          <i className="fas fa-check" />
                        </span>
                        <span className="media-body pl-3">
                          Create flexible work schedules.
                        </span>
                      </div>
                    </li>
                    <li className="py-1">
                      {/* List Box */}
                      <div className="list-box media">
                        <span className="icon align-self-center">
                          <i className="fas fa-check" />
                        </span>
                        <span className="media-body pl-3">
                          Create different attendance rules for different
                          departments or groups.
                        </span>
                      </div>
                    </li>
                    {/* <li class="py-1"> */}
                    {/* List Box */}
                    {/* <div class="list-box media">
                                  <span class="icon align-self-center"><i class="fas fa-check"></i></span>
                                  <span class="media-body pl-3">All the Lorem Ipsum generators on the Internet tend to repeat necessary.</span>
                              </div>
                          </li> */}
                  </ul>
                  <div className="icon-box d-flex mt-3">
                    <div className="service-icon">
                      <span>
                        <i className="fas fa-bell" />
                      </span>
                    </div>
                    <div className="service-icon px-3">
                      <span>
                        <i className="fas fa-envelope-open" />
                      </span>
                    </div>
                    <div className="service-icon">
                      <span>
                        <i className="fas fa-video" />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* ***** Discover Area End ***** */}
        {/* ***** Work Area Start ***** */}
        <section className="section work-area bg-overlay overflow-hidden ptb_100">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-12 col-md-10 col-lg-8">
                {/* Work Content */}
                <div className="work-content text-center">
                  <h2 className="text-white">How Does Klahan Work?</h2>
                  <p className="d-none d-sm-block text-white my-3 mt-sm-4 mb-sm-5">
                    We have designed Klahan to require minimal hardware.
                    Employees basically use their own personal phone as their
                    employment badge and employer just needs a laptop to manage
                    the backend.
                  </p>
                  <p className="d-block d-sm-none text-white my-3">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Laborum obcaecati.
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12 col-md-4">
                {/* Single Work */}
                <div className="single-work text-center p-3">
                  {/* Work Icon */}
                  <div className="work-icon">
                    <img
                      className="avatar-md"
                      src="assets/img/icon/work/download.png"
                      alt=""
                    />
                  </div>
                  <h3 className="text-white py-3">SETUP A COMPANY</h3>
                  <p className="text-white">
                    We register your company and its HR system on a cloud
                    platform to allow you to work anywhere at anytime.
                  </p>
                </div>
              </div>
              <div className="col-12 col-md-4">
                {/* Single Work */}
                <div className="single-work text-center p-3">
                  {/* Work Icon */}
                  <div className="work-icon">
                    <img
                      className="avatar-md"
                      src="assets/img/icon/work/settings.png"
                      alt=""
                    />
                  </div>
                  <h3 className="text-white py-3">STAFF DOWNLOAD APP</h3>
                  <p className="text-white">
                    Employees download app Klahan and connect their profile to
                    your company.
                  </p>
                </div>
              </div>
              <div className="col-12 col-md-4">
                {/* Single Work */}
                <div className="single-work text-center p-3">
                  {/* Work Icon */}
                  <div className="work-icon">
                    <img
                      className="avatar-md"
                      src="assets/img/icon/work/app.png"
                      alt=""
                    />
                  </div>
                  <h3 className="text-white py-3">EVERYTHING RUNS ITSELF</h3>
                  <p className="text-white">
                    Employees just follow instruction on the app.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* ***** Work Area End ***** */}
        {/* ***** Screenshots Area Start ***** */}
        <section id="screenshots" className="section screenshots-area ptb_100">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-12 col-md-10 col-lg-8">
                {/* Section Heading */}
                <div className="section-heading text-center">
                  <span className="d-inline-block rounded-pill shadow-sm fw-5 px-4 py-2 mb-3">
                    <i className="far fa-lightbulb text-primary mr-1" />
                    <span className="text-primary">Awesome </span>
                    Interface
                  </span>
                  <h2 className="text-capitalize">
                    Simple &amp; Beautiful Interface
                  </h2>
                  <p className="d-none d-sm-block mt-4">
                    Practical interface requiring minimal training to operate.
                  </p>
                  <p className="d-block d-sm-none mt-4">
                    Practical interface requiring minimal training to operate.
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                {/* App Screenshot Slider Area */}
                <div className="app-screenshots">
                  {/* Single Screenshot Item */}
                  <div className="single-screenshot">
                    <img src="assets/img/screenshots/screen1.png" alt="" />
                  </div>
                  {/* Single Screenshot Item */}
                  <div className="single-screenshot">
                    <img src="assets/img/screenshots/screen2.png" alt="" />
                  </div>
                  {/* Single Screenshot Item */}
                  <div className="single-screenshot">
                    <img src="assets/img/screenshots/screen3.png" alt="" />
                  </div>
                  {/* Single Screenshot Item */}
                  <div className="single-screenshot">
                    <img src="assets/img/screenshots/screen4.png" alt="" />
                  </div>
                  {/* Single Screenshot Item */}
                  <div className="single-screenshot">
                    <img src="assets/img/screenshots/screen5.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* ***** Screenshots Area End ***** */}
        {/* ***** Review Area Start ***** */}
        <section id="review" className="review-area ptb_100">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-12 col-md-10 col-lg-8">
                {/* Section Heading */}
                <div className="section-heading text-center">
                  <span className="d-inline-block rounded-pill shadow-sm fw-5 px-4 py-2 mb-3">
                    <i className="far fa-lightbulb text-primary mr-1" />
                    <span className="text-primary">Customer&apos;s </span>
                    Reviews
                  </span>
                  <h2 className="text-capitalize">
                    What our clients are saying
                  </h2>
                  <p className="d-none d-sm-block mt-4">
                    We have worked with many major companies with hundreds of
                    employees. It is a well tried and tested HR solution.
                  </p>
                  <p className="d-block d-sm-none mt-4">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Laborum obcaecati.
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12 col-md-6 col-lg-4 res-margin">
                {/* Single Review */}
                <div className="single-review card">
                  {/* Card Top */}
                  <div className="card-top p-4">
                    <div className="review-icon">
                      <i className="fas fa-star text-warning" />
                      <i className="fas fa-star text-warning" />
                      <i className="fas fa-star text-warning" />
                      <i className="fas fa-star text-warning" />
                      <i className="fas fa-star text-warning" />
                    </div>
                    <h4 className="text-primary mt-4 mb-3">
                      Excellent service &amp; support!!
                    </h4>
                    {/* Review Text */}
                    <div className="review-text">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Quis nam id facilis, provident doloremque placeat
                        eveniet molestias laboriosam. Optio, esse.
                      </p>
                    </div>
                    {/* Quotation Icon */}
                    <div className="quot-icon">
                      <img
                        className="avatar-md"
                        src="assets/img/icon/quote.png"
                        alt=""
                      />
                    </div>
                  </div>
                  {/* Reviewer */}
                  <div className="reviewer media bg-gray p-4">
                    {/* Reviewer Thumb */}
                    <div className="reviewer-thumb">
                      <img
                        className="avatar-lg radius-100"
                        src="assets/img/avatar/avatar-1.png"
                        alt=""
                      />
                    </div>
                    {/* Reviewer Media */}
                    <div className="reviewer-meta media-body align-self-center ml-4">
                      <h5 className="reviewer-name color-primary mb-2">
                        MEDIALOAD
                      </h5>
                      <h6 className="text-secondary fw-6">150+ Employees</h6>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-4 res-margin">
                {/* Single Review */}
                <div className="single-review card">
                  {/* Card Top */}
                  <div className="card-top p-4">
                    <div className="review-icon">
                      <i className="fas fa-star text-warning" />
                      <i className="fas fa-star text-warning" />
                      <i className="fas fa-star text-warning" />
                      <i className="fas fa-star text-warning" />
                      <i className="fas fa-star-half-alt text-warning" />
                    </div>
                    <h4 className="text-primary mt-4 mb-3">
                      Nice work! Keep it up
                    </h4>
                    {/* Review Text */}
                    <div className="review-text">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Quis nam id facilis, provident doloremque placeat
                        eveniet molestias laboriosam. Optio, esse.
                      </p>
                    </div>
                    {/* Quotation Icon */}
                    <div className="quot-icon">
                      <img
                        className="avatar-md"
                        src="assets/img/icon/quote.png"
                        alt=""
                      />
                    </div>
                  </div>
                  {/* Reviewer */}
                  <div className="reviewer media bg-gray p-4">
                    {/* Reviewer Thumb */}
                    <div className="reviewer-thumb">
                      <img
                        className="avatar-lg radius-100"
                        src="assets/img/avatar/avatar-2.png"
                        alt=""
                      />
                    </div>
                    {/* Reviewer Media */}
                    <div className="reviewer-meta media-body align-self-center ml-4">
                      <h5 className="reviewer-name color-primary mb-2">
                        Little Digital
                      </h5>
                      <h6 className="text-secondary fw-6">200+ Employees</h6>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-4">
                {/* Single Review */}
                <div className="single-review card">
                  {/* Card Top */}
                  <div className="card-top p-4">
                    <div className="review-icon">
                      <i className="fas fa-star text-warning" />
                      <i className="fas fa-star text-warning" />
                      <i className="fas fa-star text-warning" />
                      <i className="fas fa-star text-warning" />
                      <i className="fas fa-star text-warning" />
                    </div>
                    <h4 className="text-primary mt-4 mb-3">Great support!!</h4>
                    {/* Review Text */}
                    <div className="review-text">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Quis nam id facilis, provident doloremque placeat
                        eveniet molestias laboriosam. Optio, esse.
                      </p>
                    </div>
                    {/* Quotation Icon */}
                    <div className="quot-icon">
                      <img
                        className="avatar-md"
                        src="assets/img/icon/quote.png"
                        alt=""
                      />
                    </div>
                  </div>
                  {/* Reviewer */}
                  <div className="reviewer media bg-gray p-4">
                    {/* Reviewer Thumb */}
                    <div className="reviewer-thumb">
                      <img
                        className="avatar-lg radius-100"
                        src="assets/img/avatar/avatar-3.png"
                        alt=""
                      />
                    </div>
                    {/* Reviewer Media */}
                    <div className="reviewer-meta media-body align-self-center ml-4">
                      <h5 className="reviewer-name color-primary mb-2">
                        BABY OUTLET
                      </h5>
                      <h6 className="text-secondary fw-6">400+ Employees</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* ***** Review Area End ***** */}
        {/* ***** Price Plan Area Start ***** */}
        <section
          id="pricing"
          className="section price-plan-area bg-gray overflow-hidden ptb_100"
        >
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-12 col-md-10 col-lg-8">
                {/* Section Heading */}
                <div className="section-heading text-center">
                  <h2>Pricing</h2>
                  <p className="d-none d-sm-block mt-4">
                    We charge only when you are satisfied. Try our solution now.
                  </p>
                  <p className="d-block d-sm-none mt-4">
                    We charge only when you are satisfied. Try our solution now.
                  </p>
                </div>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-12 col-sm-10 col-lg-8">
                {/* <div className="row price-plan-wrapper"> */}
                <div className="col-md-6" style={{ marginLeft: "25%" }}>
                  {/* Single Price Plan */}
                  <div
                    className="single-price-plan text-center p-5 wow fadeInLeft"
                    data-aos-duration="2s"
                    data-wow-delay="0.4s"
                  >
                    {/* Plan Thumb */}
                    <div className="plan-thumb">
                      <img
                        className="avatar-lg"
                        src="assets/img/pricing/basic.png"
                        alt=""
                      />
                    </div>
                    {/* Plan Title */}
                    <div className="plan-title my-2 my-sm-3">
                      <h4 className="text-uppercase">Basic</h4>
                    </div>
                    {/* Plan Price */}
                    <div className="plan-price pb-2 pb-sm-3">
                      <h2 className="fw-7">
                        <small className="fw-6"></small>FREE
                      </h2>
                    </div>
                    {/* Plan Description */}
                    <div className="plan-description">
                      <ul className="plan-features">
                        <li className="border-top py-3">
                          Free for the first 50 employees
                        </li>
                        <li className="border-top py-3">
                          $0.5 per additional employee
                        </li>
                        <li className="border-top py-3">Payroll</li>
                        <li className="border-top border-bottom py-3">
                          Attendance check
                        </li>
                      </ul>
                    </div>
                    {/* Plan Button */}
                    <div className="plan-button">
                      <Link href="/signup" passHref>
                        <a className="btn mt-4" target="_blank">Sign Up</a>
                      </Link>
                    </div>
                  </div>
                </div>
                {/* <div className="col-12 col-md-6 mt-4 mt-md-0"> */}
                {/* Single Price Plan */}
                {/* <div
                      className="single-price-plan text-center p-5 wow fadeInRight"
                      data-aos-duration="2s"
                      data-wow-delay="0.4s"
                    > */}
                {/* Plan Thumb */}
                {/* <div className="plan-thumb">
                        <img
                          className="avatar-lg"
                          src="assets/img/pricing/premium.png"
                          alt=""
                        />
                      </div> */}
                {/* Plan Title */}
                {/* <div className="plan-title my-2 my-sm-3">
                        <h4 className="text-uppercase">Full</h4>
                      </div> */}
                {/* Plan Price */}
                {/* <div className="plan-price pb-2 pb-sm-3">
                        <h2 className="fw-7">
                          <small className="fw-6"></small>Charge
                        </h2>
                      </div> */}
                {/* Plan Description */}
                {/* <div className="plan-description">
                        <ul className="plan-features">
                          <li className="border-top py-3">$0.5 per employee</li>
                          <li className="border-top py-3">--</li> */}
                {/* <li className="border-top py-3"></li> */}
                {/* <li className="border-top border-bottom py-3">
                      Daily Backups
                    </li> */}
                {/* </ul>
                      </div> */}
                {/* Plan Button */}
                {/* <div className="plan-button">
                        <a href="#" className="btn mt-4">
                          Sign Up
                        </a>
                      </div>
                    </div> */}
                {/* </div> */}
                {/* </div> */}
              </div>
            </div>
            <div className="row justify-content-center pt-5">
              <p className="text-body pt-4 fw-5">
                Not sure what to choose? <a href="#">Contact Us</a>
              </p>
            </div>
          </div>
        </section>
        {/* ***** Price Plan Area End ***** */}
        {/* ***** FAQ Area Start ***** */}
        {/* <section className="section faq-area style-two ptb_100">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-12 col-md-10 col-lg-8"> */}
        {/* Section Heading */}
        {/* <div className="section-heading text-center">
                  <h2 className="text-capitalize">
                    Frequently asked questions
                  </h2>
                  <p className="d-none d-sm-block mt-4">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Laborum obcaecati dignissimos quae quo ad iste ipsum
                    officiis deleniti asperiores sit.
                  </p>
                  <p className="d-block d-sm-none mt-4">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Laborum obcaecati.
                  </p>
                </div>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-12"> */}
        {/* FAQ Content */}
        {/* <div className="faq-content"> */}
        {/* sApp Accordion */}
        {/* <div className="accordion" id="sApp-accordion">
                    <div className="row justify-content-center">
                      <div className="col-12 col-md-6"> */}
        {/* Single Card */}
        {/* <div className="card border-0"> */}
        {/* Card Header */}
        {/* <div className="card-header bg-inherit border-0 p-0">
                            <h2 className="mb-0">
                              <button className="btn px-0 py-3" type="button">
                                How to install sApp?
                              </button>
                            </h2>
                          </div> */}
        {/* Card Body */}
        {/* <div className="card-body px-0 py-3">
                            The point of using Lorem Ipsum is that it has a
                            more-or-less normal distribution of letters, as
                            opposed to using &apos;Content here, content
                            here&apos;, making it look like readable English.
                            Many desktop publishing packages and web page
                            editors now use Lorem Ipsum as their default model
                            text.
                          </div>
                        </div> */}
        {/* Single Card */}
        {/* <div className="card border-0"> */}
        {/* Card Header */}
        {/* <div className="card-header bg-inherit border-0 p-0">
                            <h2 className="mb-0">
                              <button className="btn px-0 py-3" type="button">
                                Can I get support from the Author?
                              </button>
                            </h2>
                          </div> */}
        {/* Card Body */}
        {/* <div className="card-body px-0 py-3">
                            Contrary to popular belief, Lorem Ipsum is not
                            simply random text. It has roots in a piece of
                            classical Latin literature from 45 BC, making it
                            over 2000 years old. Richard McClintock, a Latin
                            professor at Hampden-Sydney College in Virginia,
                            looked up one of the more obscure Latin words,
                            consectetur, from a Lorem Ipsum passage, and going
                            through the cites of the word in classical
                            literature, discovered the undoubtable source.
                          </div>
                        </div> */}
        {/* Single Card */}
        {/* <div className="card border-0"> */}
        {/* Card Header */}
        {/* <div className="card-header bg-inherit border-0 p-0">
                            <h2 className="mb-0">
                              <button className="btn px-0 py-3" type="button">
                                Do you have a free trail?
                              </button>
                            </h2>
                          </div> */}
        {/* Card Body */}
        {/* <div className="card-body px-0 py-3">
                            It has survived not only five centuries, but also
                            the leap into electronic typesetting, remaining
                            essentially unchanged. It was popularised in the
                            1960s with the release of Letraset sheets containing
                            Lorem Ipsum passages, and more recently with desktop
                            publishing software like Aldus PageMaker including
                            versions of Lorem Ipsum.
                          </div>
                        </div>
                      </div>
                      <div className="col-12 col-md-6"> */}
        {/* Single Card */}
        {/* <div className="card border-0"> */}
        {/* Card Header */}
        {/* <div className="card-header bg-inherit border-0 p-0">
                            <h2 className="mb-0">
                              <button className="btn px-0 py-3" type="button">
                                How can I edit my personal information?
                              </button>
                            </h2>
                          </div> */}
        {/* Card Body */}
        {/* <div className="card-body px-0 py-3">
                            Sed ut perspiciatis unde omnis iste natus error sit
                            voluptatem accusantium doloremque laudantium, totam
                            rem aperiam, eaque ipsa quae ab illo inventore
                            veritatis et quasi architecto beatae vitae dicta
                            sunt explicabo. Nemo enim ipsam voluptatem quia
                            voluptas sit aspernatur aut odit aut fugit, sed quia
                            consequuntur magni dolores eos qui ratione
                            voluptatem sequi nesciunt.
                          </div>
                        </div> */}
        {/* Single Card */}
        {/* <div className="card border-0"> */}
        {/* Card Header */}
        {/* <div className="card-header bg-inherit border-0 p-0">
                            <h2 className="mb-0">
                              <button className="btn px-0 py-3" type="button">
                                Contact form isn&apos;t working?
                              </button>
                            </h2>
                          </div> */}
        {/* Card Body */}
        {/* <div className="card-body px-0 py-3">
                            There are many variations of passages of Lorem Ipsum
                            available, but the majority have suffered alteration
                            in some form, by injected humour, or randomised
                            words which don&apos;t look even slightly
                            believable. If you are going to use a passage of
                            Lorem Ipsum, you need to be sure there isn&apos;t
                            anything embarrassing hidden in the middle of text.
                          </div>
                        </div> */}
        {/* Single Card */}
        {/* <div className="card border-0"> */}
        {/* Card Header */}
        {/* <div className="card-header bg-inherit border-0 p-0">
                            <h2 className="mb-0">
                              <button className="btn px-0 py-3" type="button">
                                Contact form isn&apos;t working?
                              </button>
                            </h2>
                          </div> */}
        {/* Card Body */}
        {/* <div className="card-body px-0 py-3">
                            There are many variations of passages of Lorem Ipsum
                            available, but the majority have suffered alteration
                            in some form, by injected humour, or randomised
                            words which don&apos;t look even slightly
                            believable. If you are going to use a passage of
                            Lorem Ipsum, you need to be sure there isn&apos;t
                            anything embarrassing hidden in the middle of text.
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row justify-content-center">
                      <p className="text-body text-center pt-4 px-3 fw-5">
                        Haven&apos;t find suitable answer?{" "}
                        <a href="#">Tell us what you need.</a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> */}
        {/* ***** FAQ Area End ***** */}
        {/* ***** Team Area Start ***** */}
        <section className="section team-area team-style-two overflow-hidden ptb_100">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-12 col-md-10 col-lg-8">
                {/* Section Heading */}
                <div className="section-heading text-center">
                  <h2 className="text-capitalize">Our Team Experts</h2>
                  <p className="d-none d-sm-block mt-4">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Laborum obcaecati dignissimos quae quo ad iste ipsum
                    officiis deleniti asperiores sit.
                  </p>
                  <p className="d-block d-sm-none mt-4">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Laborum obcaecati.
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                {/* Single Team */}
                <div className="single-team text-center overflow-hidden m-2 m-lg-0">
                  {/* Team Thumb */}
                  <div className="team-thumb d-inline-block position-relative overflow-hidden">
                    <img src="assets/img/avatar/avatar-1.png" alt="" />
                    {/* Team Overlay */}
                    <div className="team-overlay">
                      <h4 className="team-name text-white">Junaid Hasan</h4>
                      <h6 className="team-post text-white mt-2 mb-3">
                        Founder &amp; CEO
                      </h6>
                      {/* Team Icons */}
                      <div className="team-icons">
                        <a className="p-2" href="#">
                          <i className="fab fa-facebook-f" />
                        </a>
                        <a className="p-2" href="#">
                          <i className="fab fa-twitter" />
                        </a>
                        <a className="p-2" href="#">
                          <i className="fab fa-google-plus-g" />
                        </a>
                        <a className="p-2" href="#">
                          <i className="fab fa-linkedin-in" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                {/* Single Team */}
                <div className="single-team text-center overflow-hidden m-2 m-lg-0">
                  {/* Team Thumb */}
                  <div className="team-thumb d-inline-block position-relative overflow-hidden">
                    <img src="assets/img/avatar/avatar-2.png" alt="" />
                    {/* Team Overlay */}
                    <div className="team-overlay">
                      <h4 className="team-name text-white">Jassica William</h4>
                      <h6 className="team-post text-white mt-2 mb-3">
                        Co-Founder
                      </h6>
                      {/* Team Icons */}
                      <div className="team-icons">
                        <a className="p-2" href="#">
                          <i className="fab fa-facebook-f" />
                        </a>
                        <a className="p-2" href="#">
                          <i className="fab fa-twitter" />
                        </a>
                        <a className="p-2" href="#">
                          <i className="fab fa-google-plus-g" />
                        </a>
                        <a className="p-2" href="#">
                          <i className="fab fa-linkedin-in" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                {/* Single Team */}
                <div className="single-team text-center overflow-hidden m-2 m-lg-0">
                  {/* Team Thumb */}
                  <div className="team-thumb d-inline-block position-relative overflow-hidden">
                    <img src="assets/img/avatar/avatar-3.png" alt="" />
                    {/* Team Overlay */}
                    <div className="team-overlay">
                      <h4 className="team-name text-white">Md. Arham</h4>
                      <h6 className="team-post text-white mt-2 mb-3">
                        Web Developer
                      </h6>
                      {/* Team Icons */}
                      <div className="team-icons">
                        <a className="p-2" href="#">
                          <i className="fab fa-facebook-f" />
                        </a>
                        <a className="p-2" href="#">
                          <i className="fab fa-twitter" />
                        </a>
                        <a className="p-2" href="#">
                          <i className="fab fa-google-plus-g" />
                        </a>
                        <a className="p-2" href="#">
                          <i className="fab fa-linkedin-in" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                {/* Single Team */}
                <div className="single-team text-center overflow-hidden m-2 m-lg-0">
                  {/* Team Thumb */}
                  <div className="team-thumb d-inline-block position-relative overflow-hidden">
                    <img src="assets/img/avatar/avatar-4.png" alt="" />
                    {/* Team Overlay */}
                    <div className="team-overlay">
                      <h4 className="team-name text-white">Yasmin Akter</h4>
                      <h6 className="team-post text-white mt-2 mb-3">
                        Graphic Designer
                      </h6>
                      {/* Team Icons */}
                      <div className="team-icons">
                        <a className="p-2" href="#">
                          <i className="fab fa-facebook-f" />
                        </a>
                        <a className="p-2" href="#">
                          <i className="fab fa-twitter" />
                        </a>
                        <a className="p-2" href="#">
                          <i className="fab fa-google-plus-g" />
                        </a>
                        <a className="p-2" href="#">
                          <i className="fab fa-linkedin-in" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* ***** Team Area End ***** */}
        {/* ***** Download Area Start ***** */}
        {/* <section className="section download-area overlay-dark ptb_100">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-12 col-md-10 col-lg-9"> */}
        {/* Download Text */}
        {/* <div className="download-text text-center">
                  <h2 className="text-white">
                    Klahan is available for all devices
                  </h2>
                  <p className="text-white my-3 d-none d-sm-block">
                    Klahan is available for all devices, consectetur adipisicing
                    elit. Itaque at harum quam explicabo. Aliquam optio,
                    delectus, dolorem quod neque eos totam. Delectus quae animi
                    tenetur voluptates doloribus commodi dicta modi aliquid
                    deserunt, quis maiores nesciunt autem, aperiam natus.
                  </p>
                  <p className="text-white my-3 d-block d-sm-none">
                    Klahan is available for all devices, consectetur adipisicing
                    elit. Vel neque, cumque. Temporibus eligendi veniam,
                    necessitatibus aut id labore nisi quisquam.
                  </p> */}
        {/* Store Buttons */}
        {/* <div className="button-group store-buttons d-flex justify-content-center">
                    <a href="#">
                      <img src="assets/img/icon/google-play.png" alt="" />
                    </a>
                    <a href="#">
                      <img src="assets/img/icon/app-store.png" alt="" />
                    </a>
                  </div>
                  <span className="d-inline-block text-white fw-3 font-italic mt-3">
                    * Available on iPhone, iPad and all Android devices
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section> */}
        {/* ***** Download Area End ***** */}
        {/* ***** Subscribe Area Start ***** */}
        {/* <section className="section subscribe-area ptb_100">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-12 col-md-10 col-lg-8">
                <div className="subscribe-content text-center">
                  <h2>Subscribe to get updates</h2>
                  <p className="my-4">
                    By subscribing you will get newsleter, promotions
                    adipisicing elit. Architecto beatae, asperiores tempore
                    repudiandae saepe aspernatur unde voluptate sapiente quia
                    ex.
                  </p> */}
        {/* Subscribe Form */}
        {/* <form className="subscribe-form">
                    <div className="form-group">
                      <input
                        type="email"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="Enter your email"
                      />
                    </div>
                    <button type="submit" className="btn btn-lg btn-block">
                      Subscribe
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section> */}
        {/* ***** Subscribe Area End ***** */}
        {/*====== Contact Area Start ======*/}
        <section id="contact" className="contact-area bg-gray ptb_100">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-12 col-md-10 col-lg-8">
                {/* Section Heading */}
                <div className="section-heading text-center">
                  <h2 className="text-capitalize">Stay Tuned</h2>
                  <p className="d-none d-sm-block mt-4">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Laborum obcaecati dignissimos quae quo ad iste ipsum
                    officiis deleniti asperiores sit.
                  </p>
                  <p className="d-block d-sm-none mt-4">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Laborum obcaecati.
                  </p>
                </div>
              </div>
            </div>
            <div className="row justify-content-between">
              <div className="col-12 col-md-5">
                {/* Contact Us */}
                <div className="contact-us">
                  <p className="mb-3">
                    Contrary to popular belief, Lorem Ipsum is not simply random
                    text. It has roots in a piece of classical Latin literature
                    from 45 BC, making it over 2000 years old.
                  </p>
                  <ul>
                    <li className="py-2">
                      <a className="media" href="#">
                        <div className="social-icon mr-3">
                          <i className="fas fa-home" />
                        </div>
                        <span className="media-body align-self-center">
                          Vestibulum nulla libero, convallis, tincidunt suscipit
                          diam, DC 2002
                        </span>
                      </a>
                    </li>
                    <li className="py-2">
                      <a className="media" href="#">
                        <div className="social-icon mr-3">
                          <i className="fas fa-phone-alt" />
                        </div>
                        <span className="media-body align-self-center">
                          +1 230 456 789-012 345 6789
                        </span>
                      </a>
                    </li>
                    <li className="py-2">
                      <a className="media" href="#">
                        <div className="social-icon mr-3">
                          <i className="fas fa-envelope" />
                        </div>
                        <span className="media-body align-self-center">
                          exampledomain@domain.com
                        </span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-12 col-md-6 pt-4 pt-md-0">
                {/* Contact Box */}
                <div className="contact-box text-center">
                  {/* Contact Form */}
                  <form
                    id="contact-form"
                    method="POST"
                    action="assets/php/mail.php"
                  >
                    <div className="row">
                      <div className="col-12">
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control"
                            name="name"
                            placeholder="Name"
                            required="required"
                          />
                        </div>
                        <div className="form-group">
                          <input
                            type="email"
                            className="form-control"
                            name="email"
                            placeholder="Email"
                            required="required"
                          />
                        </div>
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control"
                            name="subject"
                            placeholder="Subject"
                            required="required"
                          />
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-group">
                          <textarea
                            className="form-control"
                            name="message"
                            placeholder="Message"
                            required="required"
                            defaultValue={""}
                          />
                        </div>
                      </div>
                      <div className="col-12">
                        <button
                          type="submit"
                          className="btn btn-lg btn-block mt-3"
                        >
                          <span className="text-white pr-3">
                            <i className="fas fa-paper-plane" />
                          </span>
                          Send Message
                        </button>
                      </div>
                    </div>
                  </form>
                  <p className="form-message" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    </div>
  );
}

export default Body;
