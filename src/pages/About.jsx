import Aos from "aos";
import React, { useEffect } from "react";

const About = () => {
  useEffect(() => {
    Aos.init({
      duration: 2000, // duration of the animations in ms
    });
  }, []);
  return (
    <>
      <div className="page_wrapper">
        {/* About Us Section Start */}
        <section className="about_us_section">
          <div
            className="container"
            data-aos="fade-up"
            data-aos-duration="3000"
          >
            <div className="section_title aos-init aos-animate">
              <span className="title_badge">About us</span>
              <h2>
                Aremko
                <br /> <span> Seamless and Secure Money Transfers</span>{" "}
              </h2>
              <p>
                Lorem Ipsum is simply dummy text of the printing indus orem
                Ipsum <br /> has been the industrys standard dummy text ever
                since.
              </p>
            </div>
          </div>
        </section>

        <section className="row_am service_section about_service">
          <div className="container">
            <div className="row service_blocks">
              <div className="col-md-6">
                <div
                  className="service_text aos-init aos-animate"
                  data-aos="fade-up"
                  data-aos-duration={1500}
                >
                  <div className="service_badge">
                    <i className="icofont-gear" />
                    <span>Process</span>
                  </div>
                  <h2>
                    <span>Overviews</span> how we develope lorem{" "}
                  </h2>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typtting industry lorem Ipsum has been the industrys
                    standard dummy text ever since.
                  </p>
                  <ul className="feature_list">
                    <li>
                      <div className="icon">
                        <span>
                          <i className="icofont-check-circled" />
                        </span>
                      </div>
                      <div className="text">
                        <p>Lorem Ipsum is simply dummy text</p>
                      </div>
                    </li>
                    <li>
                      <div className="icon">
                        <span>
                          <i className="icofont-check-circled" />
                        </span>
                      </div>
                      <div className="text">
                        <p>The printing and typesetting industry lorem</p>
                      </div>
                    </li>
                    <li>
                      <div className="icon">
                        <span>
                          <i className="icofont-check-circled" />
                        </span>
                      </div>
                      <div className="text">
                        <p>Has been the industrys dummy</p>
                      </div>
                    </li>
                    <li>
                      <div className="icon">
                        <span>
                          <i className="icofont-check-circled" />
                        </span>
                      </div>
                      <div className="text">
                        <p>Text ever since the when an unknown </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-6">
                <div
                  className="inner_block rotate_left aos-init aos-animate"
                  data-aos="fade-up"
                  data-aos-duration={1500}
                >
                  <div className="star_img">
                    <img src="images/bigstar_dark.png" alt srcSet />
                    <img src="images/smallStar_dark.png" alt srcSet />
                  </div>
                  <div className="img video_player">
                    <img src="images/about_service_1.png" alt />
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
                  </div>
                </div>
              </div>
            </div>
            <div className="row service_blocks flex-row-reverse">
              <div className="col-md-6">
                <div
                  className="service_text right_side aos-init"
                  data-aos="fade-up"
                  data-aos-duration={1500}
                >
                  <div className="service_badge">
                    <i className="icofont-ui-messaging" />
                    <span>Comunication</span>
                  </div>
                  <h2>
                    <span>Client comunication</span> for best results
                  </h2>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry lorem Ipsum has been the industrys
                    standard dummy..
                  </p>
                  <ul className="feature_list">
                    <li>
                      <div className="icon">
                        <span>
                          <i className="icofont-check-circled" />
                        </span>
                      </div>
                      <div className="text">
                        <p>Lorem Ipsum is simply dummy text</p>
                      </div>
                    </li>
                    <li>
                      <div className="icon">
                        <span>
                          <i className="icofont-check-circled" />
                        </span>
                      </div>
                      <div className="text">
                        <p>The printing and typesetting industry lorem</p>
                      </div>
                    </li>
                    <li>
                      <div className="icon">
                        <span>
                          <i className="icofont-check-circled" />
                        </span>
                      </div>
                      <div className="text">
                        <p>Has been the industrys dummy</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-6">
                <div
                  className="inner_block rotate_right aos-init"
                  data-aos="fade-up"
                  data-aos-duration={1500}
                >
                  <div className="star_img">
                    <img src="images/bigstar_dark.png" alt srcSet />
                    <img src="images/smallStar_dark.png" alt srcSet />
                  </div>
                  <div className="img">
                    <img src="images/about_service_2.png" alt />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default About;
