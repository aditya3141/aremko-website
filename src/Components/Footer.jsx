import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <footer
        className="white_text aos-init"
        data-aos="fade-in"
        data-aos-duration={1500}
        style={{ background: "#000" }}
      >
        <div className="footer_overlay" bis_skin_checked={1}>
          <img src="images/overlay-bg3-reverse.svg" alt="img" />
        </div>
        <div className="container" bis_skin_checked={1}>
          <div className="row" bis_skin_checked={1}>
            <div className="col-md-4" bis_skin_checked={1}>
              <div className="logo_side" bis_skin_checked={1}>
                <div className="logo" bis_skin_checked={1}>
                  <NavLink to="/">
                    <img
                      src="images/logo.svg"
                      style={{ width: "200px" }}
                      alt="Logo"
                    />
                  </NavLink>
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Aliquid repudiandae hic facilis veritatis, pariatur molestiae
                  adipisci quos voluptatum temporibus quam quae similique magnam
                  blanditiis aperiam beatae voluptatibus a corrupti quibusdam?
                </p>
              </div>
            </div>
            <div className="col-md-4" bis_skin_checked={1}>
              <div className="news_letter" bis_skin_checked={1}>
                <h3>Quick Links</h3>
                <ul className="links" style={{ listStyle: "none", padding: 0 }}>
                  <li>
                    <NavLink className="text-white" to="/about">
                      About us
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="text-white" to="/privacy-policy">
                      Help
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="text-white" to="/contact-us">
                      Contact Us
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-4" bis_skin_checked={1}>
              <div className="news_letter" bis_skin_checked={1}>
                <h3>Address</h3>
                <p>655 Center Street South Calgary Alberta</p>
              </div>
              <ul
                className="contact_info"
                style={{ listStyle: "none", padding: 0 }}
              >
                <li>
                  <a href="mailto:info@aremkopay.com"> info@aremkopay.com</a>
                </li>
                <li>
                  <a href="tel:08025260000">+44 08025260000</a>
                </li>
              </ul>
              <ul
                className="social_media"
                style={{ listStyle: "none", padding: 0 }}
              >
                <li>
                  <a href="#">
                    <i className="icofont-facebook" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="icofont-twitter" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="icofont-instagram" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="icofont-pinterest" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer_bottom" bis_skin_checked={1}>
          <div className="container" bis_skin_checked={1}>
            <div className="ft_inner" bis_skin_checked={1}>
              <div className="copy_text" bis_skin_checked={1}>
                <p>© Copyrights 2024. All rights reserved.</p>
              </div>
              <ul className="links" style={{ listStyle: "none", padding: 0 }}>
                <li>
                  <NavLink to="/privacy-policy">Privacy Policy</NavLink>
                </li>
                <li>
                  <NavLink to="/terms-and-conditions">
                    Terms and conditions
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/complaint-policy">Complaint Policy</NavLink>
                </li>
              </ul>
              <div className="design_by" bis_skin_checked={1}>
                <p>
                  Powered by{" "}
                  <a
                    href="https://www.calyx-solutions.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Calyx Solutions
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
