import React, { useEffect, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import OwlCarousel from "react-owl-carousel";
import BannerText from "./BannerText";
import TaskAppSection from "./TaskAppSection";

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000, // duration of the animations in ms
    });
  }, []);
  const options = {
    loop: true,
    margin: 10,
    nav: true,
    autoplay: true,
    autoplayTimeout: 3000,
    smartSpeed: 1500,
    items: 1,
  };

  return (
    <div>
      <div>
        {/* Banner-Section-Start */}
        <section className="banner_section">
          {/* container start */}
          <div className="container">
            {/* row start */}
            <div className="row">
              <div
                className="col-lg-6 col-md-12"
                data-aos="fade-up"
                data-aos-duration="3000"
              >
                {/* banner text */}
                <BannerText />
                {/* users */}
                {/* <div className="used_app">
            <ul>
              <li><img src="images/banavt1.png" alt="image" /></li>
              <li><img src="images/banavt2.png" alt="image" /></li>
              <li><img src="images/banavt3.png" alt="image" /></li>
              <li>
                <a href="#" className="popup-youtube play-button" data-url="https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&mute=1" data-toggle="modal" data-target="#myModal" title="XJj2PbenIsU"><img src="images/play.png" alt="img" /></a>
              </li>
            </ul>
            <h3 className='text-white'>12M + Active users</h3>
            <p className='text-white'>The best application to manage your <br /> customer worldwide</p>
          </div> */}
                {/* app buttons */}
                <ul className="app_btn mt-5">
                  <li>
                    <a href="#">
                      <img
                        className="blue_img"
                        src="images/googleplay.png"
                        alt="image"
                      />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img
                        className="blue_img"
                        src="images/appstorebtn.png"
                        alt="image"
                      />
                    </a>
                  </li>
                </ul>
              </div>
              {/* banner slides start */}
              <div className="col-lg-6 col-md-12">
                <div
                  className="banner_slider"
                  data-aos="fade-up"
                  data-aos-duration="3000"
                >
                  <div className="left_icon">
                    <img src="images/smallStar.png" alt="left icon" />
                  </div>

                  <OwlCarousel className="owl-theme" {...options}>
                    <div className="item">
                      <div className="slider_img">
                        <img src="images/bannerScreen.png" alt="slide 1" />
                      </div>
                    </div>
                    <div className="item">
                      <div className="slider_img">
                        <img src="images/bannerScreen2.png" alt="slide 2" />
                      </div>
                    </div>
                    <div className="item">
                      <div className="slider_img">
                        <img src="images/bannerScreen3.png" alt="slide 3" />
                      </div>
                    </div>
                  </OwlCarousel>
                  <div className="slider_frame">
                    <img src="images/iphonescren.png" alt="frame" />
                  </div>
                </div>
              </div>
              {/* banner slides end */}
            </div>
            {/* row end */}
          </div>
          {/* container end */}
          <div className="hero_overlay">
            {" "}
            <img src="images/overlay-bg3.svg" alt="image" />{" "}
          </div>
        </section>
        {/* Banner-Section-end */}
        {/* About Us Start*/}
        <section className="about_section row_am">
          <div className="container">
            <div
              className="section_title"
              data-aos="fade-up"
              data-aos-duration="1500"
            >
              <span className="title_badge mb-1">About us</span>
              <h2>
                The UK's Premier Money Transfer App:{" "}
                <img src="images/mobileicon.png" alt="image" /> Seamless User
                Experience <br />
                Convert{" "}
                <span>
                  <img src="images/usericon.png" alt="image" /> Visitors
                </span>{" "}
                into{" "}
                <span>
                  <img src="images/magnet.png" alt="image" /> Leads
                </span>
              </h2>
            </div>
            <div className="row">
              <div className="col-lg-4 col-md-6">
                <ul
                  className="app_statstic"
                  id="counter"
                  data-aos="fade-in"
                  data-aos-duration={1500}
                  style={{ listStyle: "none" }}
                >
                  <li data-aos="fade-up" data-aos-duration="1500">
                    <div className="text">
                      <p>
                        <span className="counter-value" data-count={17}>
                          0
                        </span>
                        <span>M+</span>
                      </p>
                      <p>Download</p>
                    </div>
                  </li>
                  <li data-aos="fade-up" data-aos-duration="1500">
                    <div className="text">
                      <p>
                        <span className="counter-value" data-count={2300}>
                          1500
                        </span>
                        <span>+</span>
                      </p>
                      <p>Reviews</p>
                    </div>
                  </li>
                  <li data-aos="fade-up" data-aos-duration="1500">
                    <div className="text">
                      <p>
                        <span className="counter-value" data-count={150}>
                          0
                        </span>
                        <span>+</span>
                      </p>
                      <p>Countries</p>
                    </div>
                  </li>
                  <li data-aos="fade-up" data-aos-duration="1500">
                    <div className="text">
                      <p>
                        <span className="counter-value">0 </span>
                        <span>M+</span>
                      </p>
                      <p>Followers</p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="col-lg-4 col-md-6">
                <div
                  className="abtImg text-center"
                  data-aos="fade-up"
                  data-aos-duration="1500"
                >
                  <img src="images/appscreen.png" alt="image" />
                </div>
              </div>
              <div className="col-lg-4">
                <p data-aos="fade-up" data-aos-duration="1500">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry lorem Ipsum has been the industrys
                  standard dummy text ever since the when an unknown printer
                  took a galley of type and scrambled it to make a type specimen
                  book.
                </p>
                <div
                  className="video_block"
                  data-aos="fade-up"
                  data-aos-duration="1500"
                >
                  <img
                    className="thumbnil"
                    src="images/applicationvideothumb.png"
                    alt="image"
                  />
                  <div className="playBtn">
                    <a
                      href="#"
                      className="popup-youtube play-button play_icon"
                      data-url="https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&mute=1"
                      data-toggle="modal"
                      data-target="#myModal"
                      title="XJj2PbenIsU"
                    >
                      <img src="images/play_white.png" alt="img" />
                    </a>
                    <img
                      className="spin_text"
                      src="images/playvideotext.png"
                      alt="image"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* About Us End */}

        <TaskAppSection />
        {/* Task-App-Section-end */}
        {/* Our Client */}
        <section className="row_am our_client">
          <div className="container">
            <div
              className="section_title"
              data-aos="fade-up"
              data-aos-duration="1500"
            >
              <span class="title_badge mb-3">Currencies</span>
              <h2 className="mb-3">Ability To Transfer Money</h2>
            </div>
            {/* Our Client List */}
            <div
              className="row justify-content-center"
              data-aos="fade-up"
              data-aos-duration="1500"
            >
              <div className="col-lg-4 col-md-6 col-sm-6" bis_skin_checked={1}>
                <div className="currency-card" bis_skin_checked={1}>
                  <div className="currency-flag" bis_skin_checked={1}>
                    <img src="assets/img/currency/flag-1.png" alt="Image" />
                  </div>
                  <div className="currency-info" bis_skin_checked={1}>
                    <h3>Australia</h3>
                    <span>AUD</span>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6" bis_skin_checked={1}>
                <div className="currency-card" bis_skin_checked={1}>
                  <div className="currency-flag" bis_skin_checked={1}>
                    <img src="assets/img/currency/flag-2.png" alt="Image" />
                  </div>
                  <div className="currency-info" bis_skin_checked={1}>
                    <h3>Canada</h3>
                    <span>CAD</span>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6" bis_skin_checked={1}>
                <div className="currency-card" bis_skin_checked={1}>
                  <div className="currency-flag" bis_skin_checked={1}>
                    <img src="assets/img/currency/flag-3.png" alt="Image" />
                  </div>
                  <div className="currency-info" bis_skin_checked={1}>
                    <h3>United Kingdom</h3>
                    <span>GBP</span>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6" bis_skin_checked={1}>
                <div className="currency-card" bis_skin_checked={1}>
                  <div className="currency-flag" bis_skin_checked={1}>
                    <img src="assets/img/currency/flag-4.png" alt="Image" />
                  </div>
                  <div className="currency-info" bis_skin_checked={1}>
                    <h3>Japan</h3>
                    <span>JPY</span>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6" bis_skin_checked={1}>
                <div className="currency-card" bis_skin_checked={1}>
                  <div className="currency-flag" bis_skin_checked={1}>
                    <img src="assets/img/currency/flag-5.png" alt="Image" />
                  </div>
                  <div className="currency-info" bis_skin_checked={1}>
                    <h3>New Zealand</h3>
                    <span>NZD</span>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6" bis_skin_checked={1}>
                <div className="currency-card" bis_skin_checked={1}>
                  <div className="currency-flag" bis_skin_checked={1}>
                    <img src="assets/img/currency/flag-6.png" alt="Image" />
                  </div>
                  <div className="currency-info" bis_skin_checked={1}>
                    <h3>Austria</h3>
                    <span>EURO</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Task-App-Section-Start */}
        {/* Page Wraper */}
        <div className="page_wrapper">
          {/* Text List flow Section Start */}

          {/* Text List flow Section End */}

          {/* How It Work Section Start */}
          <section className="how_it_section">
            <div
              className="how_it_inner"
              data-aos="fade-in"
              data-aos-duration={1500}
            >
              <div className="container">
                <div
                  className="section_title"
                  data-aos="fade-up"
                  data-aos-duration="1500"
                >
                  <span className="title_badge">Quick &amp; easy</span>
                  <h2>How it works in 4 steps</h2>
                </div>
                <div className="row">
                  <div className="col-md-3">
                    <div
                      className="steps_block step_border"
                      data-aos="fade-up"
                      data-aos-duration="1500"
                    >
                      <div className="steps">
                        <div className="icon">
                          <img src="images/howstep2.png" alt="image" />
                        </div>
                        <div className="text">
                          <h3>Create account</h3>

                          <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing
                            elit.
                          </p>
                        </div>
                      </div>
                      <span className="step">01</span>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div
                      className="steps_block step_border"
                      data-aos="fade-up"
                      data-aos-duration="1500"
                    >
                      <div className="steps">
                        <div className="icon">
                          <img src="images/howstep2.png" alt="image" />
                        </div>
                        <div className="text">
                          <h3>Set Up A Transfer</h3>

                          <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing
                            elit.
                          </p>
                        </div>
                      </div>
                      <span className="step">02</span>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div
                      className="steps_block step_border"
                      data-aos="fade-up"
                      data-aos-duration="1500"
                    >
                      <div className="steps">
                        <div className="icon">
                          <img src="images/howstep2.png" alt="image" />
                        </div>
                        <div className="text">
                          <h3>Pay Securely</h3>

                          <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing
                            elit.
                          </p>
                        </div>
                      </div>
                      <span className="step">03</span>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div
                      className="steps_block"
                      data-aos="fade-up"
                      data-aos-duration="1500"
                    >
                      <div className="steps">
                        <div className="icon">
                          <img src="images/howstep3.png" alt="image" />
                        </div>
                        <div className="text">
                          <h3>That's It!</h3>

                          <p>
                            Enjoy our app &amp; share <br /> most amazing app
                            experience
                          </p>
                        </div>
                      </div>
                      <span className="step">04</span>
                    </div>
                  </div>
                </div>
                <div className="text-center"></div>
              </div>
            </div>
          </section>
          {/* How It Work Section End */}
        </div>
        {/* Wraper End */}
        {/* Positive Reviews Section Start */}
        <section className="review_section row_am">
          <div className="container">
            <div className="positive_inner">
              <div className="row">
                <div className="col-md-6 sticky-top">
                  <div className="sidebar_text">
                    <div className="section_title text-left">
                      <span className="title_badge">Reviews</span>
                      <h2>
                        <span>Positive reviews </span> <br />
                        of our clients
                      </h2>
                    </div>
                    <div className="google_rating">
                      <div className="star">
                        <span>
                          <i className="icofont-star" />
                        </span>
                        <span>
                          <i className="icofont-star" />
                        </span>
                        <span>
                          <i className="icofont-star" />
                        </span>
                        <span>
                          <i className="icofont-star" />
                        </span>
                        <span>
                          <i className="icofont-star" />
                        </span>
                      </div>
                      <p>
                        4.5/5.0 Rated on{" "}
                        <img
                          className="img-fluid"
                          src="images/google.png"
                          alt="image"
                        />
                      </p>
                    </div>
                    <div className="user_review">
                      <p>
                        1399{" "}
                        <a href="#">
                          Total user reviews{" "}
                          <i className="icofont-arrow-right" />
                        </a>
                      </p>
                    </div>
                    <div className="smiley_icon">
                      <img src="images/smily.png" alt="image" />
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="review_side">
                    <div
                      className="review_block"
                      data-aos="fade-up"
                      data-aos-duration="1500"
                    >
                      <div className="coustomer_info">
                        <div className="avtar">
                          <img src="images/review1.png" alt="image" />
                          <div className="text">
                            <h3>Willium Joy</h3>
                            <span>Smartbrain Tech</span>
                          </div>
                        </div>
                        <div className="star">
                          <span>
                            <i className="icofont-star" />
                          </span>
                          <span>
                            <i className="icofont-star" />
                          </span>
                          <span>
                            <i className="icofont-star" />
                          </span>
                          <span>
                            <i className="icofont-star" />
                          </span>
                          <span>
                            <i className="icofont-star" />
                          </span>
                        </div>
                      </div>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Sapiente culpa, dolores ullam laudantium deleniti ipsa
                        qui saepe voluptatum nam pariatur? Lorem ipsum dolor sit
                        amet consectetur adipisicing elit. Neque, totam.
                      </p>
                    </div>
                    <div
                      className="review_block"
                      data-aos="fade-up"
                      data-aos-duration="1500"
                    >
                      <div className="coustomer_info">
                        <div className="avtar">
                          <img src="images/review2..png" alt="image" />
                          <div className="text">
                            <h3>John Due</h3>
                            <span>Corporate Agency</span>
                          </div>
                        </div>
                        <div className="star">
                          <span>
                            <i className="icofont-star" />
                          </span>
                          <span>
                            <i className="icofont-star" />
                          </span>
                          <span>
                            <i className="icofont-star" />
                          </span>
                          <span>
                            <i className="icofont-star" />
                          </span>
                          <span>
                            <i className="icofont-star" />
                          </span>
                        </div>
                      </div>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Sapiente culpa, dolores ullam laudantium deleniti ipsa
                        qui saepe voluptatum nam pariatur? Lorem ipsum dolor sit
                        amet consectetur adipisicing elit. Pariatur et, nemo
                        distinctio eum omnis quam!
                      </p>
                    </div>
                    <div
                      className="review_block"
                      data-aos="fade-up"
                      data-aos-duration="1500"
                    >
                      <div className="coustomer_info">
                        <div className="avtar">
                          <img src="images/review3..png" alt="image" />
                          <div className="text">
                            <h3>Maria</h3>
                            <span>Company Inc</span>
                          </div>
                        </div>
                        <div className="star">
                          <span>
                            <i className="icofont-star" />
                          </span>
                          <span>
                            <i className="icofont-star" />
                          </span>
                          <span>
                            <i className="icofont-star" />
                          </span>
                          <span>
                            <i className="icofont-star" />
                          </span>
                          <span>
                            <i className="icofont-star" />
                          </span>
                        </div>
                      </div>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Sapiente culpa, dolores ullam laudantium deleniti ipsa
                        qui saepe voluptatum nam pariatur? Lorem ipsum dolor sit
                        amet consectetur adipisicing elit. Pariatur et, nemo
                        distinctio eum omnis quam!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Positive Reviews Section End */}
        {/* Page Wraper */}
        <div className="page_wrapper">
          {/* Pricing-Section */}

          {/* Pricing-Section end */}
          {/* Beautifull-interface-Section start */}

          {/* Beautifull-interface-Section end */}
          {/* App-Download-Section-Start */}
          <section
            className="row_am download_app"
            style={{ overflow: "hidden" }}
          >
            {/* Task Block start */}
            <div
              className="task_block"
              data-aos="fade-up"
              data-aos-duration="1500"
            >
              {/* row start */}
              <div className="row">
                <div className="col-md-6">
                  {/* task text */}
                  <div className="task_text">
                    <div
                      className="section_title"
                      data-aos="fade-up"
                      data-aos-duration="1500"
                      data-aos-delay={100}
                    >
                      <span className="title_badge">Download</span>
                      <h2>Our app is available for Android &amp; iOS</h2>
                      <p>
                        Lorem Ipsum is simply dummy text of the printing indus
                        orem Ipsum has been the industrys.
                      </p>
                    </div>
                    {/* app buttons */}
                    <ul
                      className="app_btn"
                      data-aos="fade-up"
                      data-aos-duration="1500"
                      style={{ listStyle: "none" }}
                    >
                      <li>
                        <a href="#">
                          <img
                            className="blue_img"
                            src="images/googleplay.png"
                            alt="image"
                          />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <img
                            className="blue_img"
                            src="images/appstorebtn.png"
                            alt="image"
                          />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-6">
                  {/* task images */}
                  <div
                    className="task_img"
                    data-aos="fade-in"
                    data-aos-duration={1500}
                  >
                    <div className="frame_img">
                      <img src="images/our_app.png" alt="image" />
                    </div>
                  </div>
                </div>
              </div>
              {/* row end */}
            </div>
            {/* Task Block end */}
          </section>
          {/* App-Download-Section-end */}
          {/* Blog Section Start */}
        </div>
      </div>
    </div>
  );
};

export default Home;
