import Aos from "aos";
import React, { useEffect } from "react";

const ContactUs = () => {
  useEffect(() => {
    Aos.init({
      duration: 2000, // duration of the animations in ms
    });
  }, []);
  return (
    <div>
      <div className="page_wrapper">
        {/* Contact Us Section Start */}
        <section className="contact_section">
          <div className="container">
            <div
              className="section_title aos-init aos-animate"
              data-aos="fade-up"
              data-aos-duration={1500}
            >
              <span className="title_badge">Contact us</span>
              <h2>
                Any query ? <span>let's talk</span>
              </h2>
              <p>
                Lorem Ipsum is simply dummy text of the printing indus orem
                Ipsum <br /> has been the industrys standard dummy text ever
                since.
              </p>
            </div>
            <ul className="contact_listing" style={{ listStyleType: "none" }}>
              <li
                data-aos="fade-up"
                data-aos-duration={1500}
                className="aos-init"
              >
                <span className="icon">
                  <img src="images/mail_icon.png" alt="image" />
                </span>
                <span className="lable">Email us</span>
                <a href="mailto:info@aremkopay.com">info@aremkopay.com</a>
              </li>
              <li
                data-aos="fade-up"
                data-aos-duration={1500}
                data-aos-delay={150}
                className="aos-init"
              >
                <span className="icon">
                  <img src="images/phone_icon.png" alt="image" />
                </span>
                <span className="lable">Call us</span>
                <a href="tel:08025260000">+44 08025260000</a>
              </li>
              <li
                data-aos="fade-up"
                data-aos-duration={1500}
                data-aos-delay={300}
                className="aos-init"
              >
                <span className="icon">
                  <img src="images/location_icon.png" alt="image" />
                </span>
                <span className="lable">Our location</span>
                <a target="_blank" href="https://www.google.com/maps">
                  655 Center Street South <br /> Calgary Alberta
                </a>
              </li>
            </ul>
          </div>
        </section>
        {/* Contact Us Section End */}
        {/* Contact Form Section Start */}
        <section
          className="contact_form row_am aos-init"
          data-aos="fade-in"
          data-aos-duration={1500}
        >
          <div className="contact_inner">
            <div className="container">
              <div
                className="section_title aos-init"
                data-aos="fade-up"
                data-aos-duration={1500}
                data-aos-delay={100}
              >
                <span className="title_badge">Message us</span>
                <h2>Drop a message us</h2>
                <p>Fill up form below, our team will get back soon</p>
              </div>
              <form
                data-aos="fade-up"
                data-aos-duration={1500}
                className="aos-init"
              >
                <div className="row">
                  <div className="col-md-4">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Name *"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="form-group">
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Email *"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="form-group">
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Company Name"
                      />
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="form-group">
                      <select className="form-control">
                        <option value>Country</option>
                        <option value>India</option>
                        <option value>USA</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Phone"
                      />
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Website"
                      />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-group">
                      <textarea
                        className="form-control"
                        placeholder="Comments"
                        defaultValue={""}
                      />
                    </div>
                  </div>
                  <div className="col-md-8">
                    <div className="coustome_checkbox">
                      <label htmlFor="term_checkbox">
                        <input type="checkbox" id="term_checkbox" />
                        <span className="checkmark" />I agree to receive emails,
                        newsletters and promotional messages
                      </label>
                    </div>
                  </div>
                  <div className="col-md-4 text-right">
                    <div className="btn_block">
                      <button className="btn puprple_btn ml-0">Submit</button>
                      <div className="btn_bottom" />
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </section>
        {/* Contact Form Section End */}
        {/* Google Map Start */}
        <div
          className="map_block row_am aos-init"
          data-aos="fade-in"
          data-aos-duration={1500}
        >
          <div className="container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2508.335418160624!2d-114.06571602470386!3d51.04689414424186!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5371653290888c17%3A0x49a76d2331b6bb16!2s655%20Centre%20St%20S%2C%20Calgary%2C%20AB%20T2E%202P6%2C%20Canada!5e0!3m2!1sen!2sin!4v1719404820291!5m2!1sen!2sin"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
        {/* Google Map End */}
        {/* Footer-Section start */}

        {/* Footer-Section end */}
        {/* go top button */}
      </div>
    </div>
  );
};

export default ContactUs;
