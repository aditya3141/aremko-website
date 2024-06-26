import Aos from "aos";
import React, { useEffect } from "react";

const ComplaintPolicy = () => {
  useEffect(() => {
    Aos.init({
      duration: 2000, // duration of the animations in ms
    });
  }, []);

  return (
    <div className="page_wrapper">
      <section className="blog_detail_section text-center pb-0 mb-0">
        <div className="container">
          <span
            className="title_badge"
            data-aos="fade-up"
            data-aos-duration="1500"
          >
            Our Complaints Policy
          </span>
          <h2
            style={{ fontWeight: "bold" }}
            data-aos="fade-up"
            data-aos-duration="1800"
          >
            Complaints Policy
          </h2>
        </div>
      </section>
      <section className="blog_detail_section pt-0 mt-5">
        <div className="container blog-body" style={{ lineHeight: "1.8" }}>
          <div className="blog_body">
            <h2 data-aos="fade-up" data-aos-duration="3000">
              Our complaints policy
            </h2>
            <p data-aos="fade-up" data-aos-duration="3000">
              We are committed to providing a high-quality money transfer
              service to all our clients. When something goes wrong, we need you
              to tell us about it. This will help us to improve our standards.
            </p>
            <p data-aos="fade-up" data-aos-duration="3000">
              If you have a complaint, please contact us with the details.
            </p>
            <h2 data-aos="fade-up" data-aos-duration="3000">
              Definitions
            </h2>
            <ul data-aos="fade-up" data-aos-duration="3000">
              <li>
                By Email:{" "}
                <a href="mailto:info@aremkopay.com">info@aremkopay.com</a>
              </li>
              <li>
                By Phone: <a href="tel:08025260000">+44 08025260000</a>{" "}
              </li>
              <li>By Post: 655 Center Street South Calgary Alberta</li>
            </ul>
            <p data-aos="fade-up" data-aos-duration="3000">
              We have eight weeks to consider your complaint. If we have not
              resolved it within this time you may complain to the Financial
              Ombudsman Service.
            </p>
            <h2 data-aos="fade-up" data-aos-duration="3000">
              What will happen next?
            </h2>
            <p data-aos="fade-up" data-aos-duration="3000">
              We will send you a letter/email acknowledging receipt of your
              complaint on the same day of receiving it, enclosing a copy of
              this procedure. If you have complained in person or on call, we
              will try to resolve and reach the solution the same day.
            </p>
            <p data-aos="fade-up" data-aos-duration="3000">
              If we are unable to resolve your complaint on the same day then we
              will further investigate your complaint. This will normally
              involve finding details of your complaint, reviewing your matter
              by speaking to the member of staff who acted for you.
            </p>
            <p data-aos="fade-up" data-aos-duration="3000">
              We will respond to you within 7 days with our Final Response which
              may be a remedial action.
            </p>
            <p data-aos="fade-up" data-aos-duration="3000">
              If you are still not satisfied, you can then contact the Financial
              Ombudsman Service, about your complaint. Normally, you will need
              to bring a complaint to the Financial Ombudsman Service within six
              months of receiving a final written response from us about your
              complaint. For further information, you should contact the
              Financial Ombudsman Service on:
            </p>
            <ul data-aos="fade-up" data-aos-duration="3000">
              <li>
                Online:{" "}
                <a
                  href="https://www.financial-ombudsman.org.uk"
                  target="_blank"
                >
                  https://www.financial-ombudsman.org.uk/
                </a>
              </li>
              <li>Email: complaint.info@financial-ombudsman.org.uk ,</li>
              <li>Mail: 8A Queen Victoria Street Reading, Berkshire RG11TG</li>
              <li>Phone: +44(08025260000)(free), +4408025260000</li>
              <li>
                By Post: 155 Peckham Hill Street, Peckham, London, SE15 5JZ
              </li>
              <li>If you're not in the UK, call +4408025260000.</li>
            </ul>
            <p>
              FOS will not charge you for making a complaint and if you are not
              satisfied with the outcome you can still bring legal proceedings.
              In addition, please note that disputes may also be submitted for
              online resolution via the European Online Dispute Resolution
              Platform accessible at: http://ec.europa.eu/odr
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ComplaintPolicy;
