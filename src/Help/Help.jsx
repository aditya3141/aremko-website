import Aos from "aos";
import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";

const Help = () => {
  useEffect(() => {
    Aos.init({
      duration: 2000, // duration of the animations in ms
    });
  }, []);
  return (
    <div>
      <div className="page_wrapper">
        {/* FAQ Tab Section Start */}
        <section className="row_am faq_section">
          <div className="container">
            <div
              className="section_title aos-init aos-animate"
              data-aos="fade-up"
              data-aos-duration={1500}
            >
              <span className="title_badge">Question &amp; Answer</span>
              <h2>
                <span>FAQs</span> - Frequently Asked Questions
              </h2>
            </div>
            <ul
              className="nav nav-tabs aos-init aos-animate"
              id="myTab"
              role="tablist"
              data-aos="fade-up"
              data-aos-duration={1500}
            >
              <li className="nav-item " role="presentation">
                <button
                  className="nav-link active"
                  id="genral-tab"
                  data-toggle="tab"
                  data-target="#genral"
                  type="button"
                  role="tab"
                  aria-controls="genral"
                  aria-selected="true"
                >
                  KYC Upload
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="pricing-tab"
                  data-toggle="tab"
                  data-target="#pricing"
                  type="button"
                  role="tab"
                  aria-controls="pricing"
                  aria-selected="false"
                >
                  Data Safety
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="account-tab"
                  data-toggle="tab"
                  data-target="#account"
                  type="button"
                  role="tab"
                  aria-controls="account"
                  aria-selected="false"
                >
                  Onboarding FAQs
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="returns-tab"
                  data-toggle="tab"
                  data-target="#returns"
                  type="button"
                  role="tab"
                  aria-controls="returns"
                  aria-selected="false"
                >
                  General FAQs
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <NavLink
                  to="/contact-us"
                  className="nav-link"
                  style={{ color: "#000" }}
                >
                  Contact Info
                </NavLink>
              </li>
            </ul>
            <div
              className="tab-content aos-init"
              id="myTabContent"
              data-aos="fade-up"
              data-aos-duration={1500}
            >
              <div
                className="tab-pane fade active show"
                id="genral"
                role="tabpanel"
                aria-labelledby="genral-tab"
              >
                <div className="accordion" id="accordionGenral">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="card">
                        <div className="card-header" id="headingOne">
                          <h2 className="mb-0">
                            <button
                              className="btn btn-link btn-block text-left"
                              type="button"
                              data-toggle="collapse"
                              data-target="#collapseOne"
                              aria-expanded="true"
                              aria-controls="collapseOne"
                            >
                              How app will useful for my business ?
                              <span className="icons">
                                <i className="icofont-plus" />
                                <i className="icofont-minus" />
                              </span>
                            </button>
                          </h2>
                        </div>
                        <div
                          id="collapseOne"
                          className="collapse show"
                          aria-labelledby="headingOne"
                          data-parent="#accordionGenral"
                        >
                          <div className="card-body">
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry lorem Ipsu m has been the
                            industrys standard dummy text ever since the when an
                            unknown printer.
                          </div>
                        </div>
                      </div>
                      <div className="card">
                        <div className="card-header" id="headingTwo">
                          <h2 className="mb-0">
                            <button
                              className="btn btn-link btn-block text-left collapsed"
                              type="button"
                              data-toggle="collapse"
                              data-target="#collapseTwo"
                              aria-expanded="false"
                              aria-controls="collapseTwo"
                            >
                              What support i will get in premium package?
                              <span className="icons">
                                <i className="icofont-plus" />
                                <i className="icofont-minus" />
                              </span>
                            </button>
                          </h2>
                        </div>
                        <div
                          id="collapseTwo"
                          className="collapse"
                          aria-labelledby="headingTwo"
                          data-parent="#accordionGenral"
                        >
                          <div className="card-body">
                            Some placeholder content for the second accordion
                            panel. This panel is hidden by default.
                          </div>
                        </div>
                      </div>
                      <div className="card">
                        <div className="card-header" id="headingThree">
                          <h2 className="mb-0">
                            <button
                              className="btn btn-link btn-block text-left collapsed"
                              type="button"
                              data-toggle="collapse"
                              data-target="#collapseThree"
                              aria-expanded="false"
                              aria-controls="collapseThree"
                            >
                              Can i get update for free ?
                              <span className="icons">
                                <i className="icofont-plus" />
                                <i className="icofont-minus" />
                              </span>
                            </button>
                          </h2>
                        </div>
                        <div
                          id="collapseThree"
                          className="collapse"
                          aria-labelledby="headingThree"
                          data-parent="#accordionGenral"
                        >
                          <div className="card-body">
                            And lastly, the placeholder content for the third
                            and final accordion panel. This panel is hidden by
                            default.
                          </div>
                        </div>
                      </div>
                      <div className="card">
                        <div className="card-header" id="headingfour">
                          <h2 className="mb-0">
                            <button
                              className="btn btn-link btn-block text-left collapsed"
                              type="button"
                              data-toggle="collapse"
                              data-target="#collapsefour"
                              aria-expanded="false"
                              aria-controls="collapsefour"
                            >
                              How to setup account ?
                              <span className="icons">
                                <i className="icofont-plus" />
                                <i className="icofont-minus" />
                              </span>
                            </button>
                          </h2>
                        </div>
                        <div
                          id="collapsefour"
                          className="collapse"
                          aria-labelledby="headingfour"
                          data-parent="#accordionGenral"
                        >
                          <div className="card-body">
                            Some placeholder content for the second accordion
                            panel. This panel is hidden by default.
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="card">
                        <div className="card-header" id="headingfive">
                          <h2 className="mb-0">
                            <button
                              className="btn btn-link btn-block text-left collapsed"
                              type="button"
                              data-toggle="collapse"
                              data-target="#collapsefive"
                              aria-expanded="false"
                              aria-controls="collapsefive"
                            >
                              Is there any hidden cost?
                              <span className="icons">
                                <i className="icofont-plus" />
                                <i className="icofont-minus" />
                              </span>
                            </button>
                          </h2>
                        </div>
                        <div
                          id="collapsefive"
                          className="collapse"
                          aria-labelledby="headingfive"
                          data-parent="#accordionGenral"
                        >
                          <div className="card-body">
                            Some placeholder content for the second accordion
                            panel. This panel is hidden by default.
                          </div>
                        </div>
                      </div>
                      <div className="card">
                        <div className="card-header" id="headingsix">
                          <h2 className="mb-0">
                            <button
                              className="btn btn-link btn-block text-left collapsed"
                              type="button"
                              data-toggle="collapse"
                              data-target="#collapsesix"
                              aria-expanded="false"
                              aria-controls="collapsesix"
                            >
                              What is process to get refund ?
                              <span className="icons">
                                <i className="icofont-plus" />
                                <i className="icofont-minus" />
                              </span>
                            </button>
                          </h2>
                        </div>
                        <div
                          id="collapsesix"
                          className="collapse"
                          aria-labelledby="headingsix"
                          data-parent="#accordionGenral"
                        >
                          <div className="card-body">
                            And lastly, the placeholder content for the third
                            and final accordion panel. This panel is hidden by
                            default.
                          </div>
                        </div>
                      </div>
                      <div className="card">
                        <div className="card-header" id="headingseven">
                          <h2 className="mb-0">
                            <button
                              className="btn btn-link btn-block text-left collapsed"
                              type="button"
                              data-toggle="collapse"
                              data-target="#collapseseven"
                              aria-expanded="false"
                              aria-controls="collapseseven"
                            >
                              How to setup account ?
                              <span className="icons">
                                <i className="icofont-plus" />
                                <i className="icofont-minus" />
                              </span>
                            </button>
                          </h2>
                        </div>
                        <div
                          id="collapseseven"
                          className="collapse"
                          aria-labelledby="headingseven"
                          data-parent="#accordionGenral"
                        >
                          <div className="card-body">
                            And lastly, the placeholder content for the third
                            and final accordion panel. This panel is hidden by
                            default.
                          </div>
                        </div>
                      </div>
                      <div className="card">
                        <div className="card-header" id="headingeight">
                          <h2 className="mb-0">
                            <button
                              className="btn btn-link btn-block text-left collapsed"
                              type="button"
                              data-toggle="collapse"
                              data-target="#collapseeight"
                              aria-expanded="false"
                              aria-controls="collapseeight"
                            >
                              What is process to get refund ?
                              <span className="icons">
                                <i className="icofont-plus" />
                                <i className="icofont-minus" />
                              </span>
                            </button>
                          </h2>
                        </div>
                        <div
                          id="collapseeight"
                          className="collapse"
                          aria-labelledby="headingeight"
                          data-parent="#accordionGenral"
                        >
                          <div className="card-body">
                            And lastly, the placeholder content for the third
                            and final accordion panel. This panel is hidden by
                            default.
                          </div>
                        </div>
                      </div>
                      <div className="card">
                        <div className="card-header" id="headingnine">
                          <h2 className="mb-0">
                            <button
                              className="btn btn-link btn-block text-left collapsed"
                              type="button"
                              data-toggle="collapse"
                              data-target="#collapsenine"
                              aria-expanded="false"
                              aria-controls="collapsenine"
                            >
                              Is there any discount on packages ?
                              <span className="icons">
                                <i className="icofont-plus" />
                                <i className="icofont-minus" />
                              </span>
                            </button>
                          </h2>
                        </div>
                        <div
                          id="collapsenine"
                          className="collapse"
                          aria-labelledby="headingnine"
                          data-parent="#accordionGenral"
                        >
                          <div className="card-body">
                            And lastly, the placeholder content for the third
                            and final accordion panel. This panel is hidden by
                            default.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="pricing"
                role="tabpanel"
                aria-labelledby="pricing-tab"
              >
                <div className="accordion" id="accordionPricing">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="card">
                        <div className="card-header" id="headingpricingOne">
                          <h2 className="mb-0">
                            <button
                              className="btn btn-link btn-block text-left"
                              type="button"
                              data-toggle="collapse"
                              data-target="#collapsepricingOne"
                              aria-expanded="true"
                              aria-controls="collapsepricingOne"
                            >
                              Lorem Ipsum is simply dummy text ?
                              <span className="icons">
                                <i className="icofont-plus" />
                                <i className="icofont-minus" />
                              </span>
                            </button>
                          </h2>
                        </div>
                        <div
                          id="collapsepricingOne"
                          className="collapse show"
                          aria-labelledby="headingpricingOne"
                          data-parent="#accordionPricing"
                        >
                          <div className="card-body">
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry lorem Ipsu m has been the
                            industrys standard dummy text ever since the when an
                            unknown printer.
                          </div>
                        </div>
                      </div>
                      <div className="card">
                        <div className="card-header" id="headingpricingTwo">
                          <h2 className="mb-0">
                            <button
                              className="btn btn-link btn-block text-left collapsed"
                              type="button"
                              data-toggle="collapse"
                              data-target="#collapsepricingTwo"
                              aria-expanded="false"
                              aria-controls="collapsepricingTwo"
                            >
                              Ever since the when an unknown printer?
                              <span className="icons">
                                <i className="icofont-plus" />
                                <i className="icofont-minus" />
                              </span>
                            </button>
                          </h2>
                        </div>
                        <div
                          id="collapsepricingTwo"
                          className="collapse"
                          aria-labelledby="headingpricingTwo"
                          data-parent="#accordionPricing"
                        >
                          <div className="card-body">
                            Some placeholder content for the second accordion
                            panel. This panel is hidden by default.
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="card">
                        <div className="card-header" id="headingpricingThree">
                          <h2 className="mb-0">
                            <button
                              className="btn btn-link btn-block text-left collapsed"
                              type="button"
                              data-toggle="collapse"
                              data-target="#collapsepricingThree"
                              aria-expanded="false"
                              aria-controls="collapsepricingThree"
                            >
                              Is there any hidden cost?
                              <span className="icons">
                                <i className="icofont-plus" />
                                <i className="icofont-minus" />
                              </span>
                            </button>
                          </h2>
                        </div>
                        <div
                          id="collapsepricingThree"
                          className="collapse"
                          aria-labelledby="headingpricingThree"
                          data-parent="#accordionPricing"
                        >
                          <div className="card-body">
                            Some placeholder content for the second accordion
                            panel. This panel is hidden by default.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="account"
                role="tabpanel"
                aria-labelledby="account-tab"
              >
                <div className="accordion" id="accordionAccount">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="card">
                        <div className="card-header" id="headingAccountOne">
                          <h2 className="mb-0">
                            <button
                              className="btn btn-link btn-block text-left"
                              type="button"
                              data-toggle="collapse"
                              data-target="#collapseAccountOne"
                              aria-expanded="true"
                              aria-controls="collapseAccountOne"
                            >
                              Industrys standard dummy text ever since ?
                              <span className="icons">
                                <i className="icofont-plus" />
                                <i className="icofont-minus" />
                              </span>
                            </button>
                          </h2>
                        </div>
                        <div
                          id="collapseAccountOne"
                          className="collapse show"
                          aria-labelledby="headingAccountOne"
                          data-parent="#accordionAccount"
                        >
                          <div className="card-body">
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry lorem Ipsu m has been the
                            industrys standard dummy text ever since the when an
                            unknown printer.
                          </div>
                        </div>
                      </div>
                      <div className="card">
                        <div className="card-header" id="headingAccountTwo">
                          <h2 className="mb-0">
                            <button
                              className="btn btn-link btn-block text-left collapsed"
                              type="button"
                              data-toggle="collapse"
                              data-target="#collapseAccountTwo"
                              aria-expanded="false"
                              aria-controls="collapseAccountTwo"
                            >
                              Placeholder content?
                              <span className="icons">
                                <i className="icofont-plus" />
                                <i className="icofont-minus" />
                              </span>
                            </button>
                          </h2>
                        </div>
                        <div
                          id="collapseAccountTwo"
                          className="collapse"
                          aria-labelledby="headingAccountTwo"
                          data-parent="#accordionAccount"
                        >
                          <div className="card-body">
                            Some placeholder content for the second accordion
                            panel. This panel is hidden by default.
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="card">
                        <div className="card-header" id="headingAccountThree">
                          <h2 className="mb-0">
                            <button
                              className="btn btn-link btn-block text-left collapsed"
                              type="button"
                              data-toggle="collapse"
                              data-target="#collapseAccountThree"
                              aria-expanded="false"
                              aria-controls="collapseAccountThree"
                            >
                              Is there any hidden cost?
                              <span className="icons">
                                <i className="icofont-plus" />
                                <i className="icofont-minus" />
                              </span>
                            </button>
                          </h2>
                        </div>
                        <div
                          id="collapseAccountThree"
                          className="collapse"
                          aria-labelledby="headingAccountThree"
                          data-parent="#accordionAccount"
                        >
                          <div className="card-body">
                            Some placeholder content for the second accordion
                            panel. This panel is hidden by default.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="returns"
                role="tabpanel"
                aria-labelledby="returns-tab"
              >
                <div className="accordion" id="accordionRp">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="card">
                        <div className="card-header" id="headingRpOne">
                          <h2 className="mb-0">
                            <button
                              className="btn btn-link btn-block text-left"
                              type="button"
                              data-toggle="collapse"
                              data-target="#collapseRpOne"
                              aria-expanded="true"
                              aria-controls="collapseRpOne"
                            >
                              Simply dummy text of the printing ?
                              <span className="icons">
                                <i className="icofont-plus" />
                                <i className="icofont-minus" />
                              </span>
                            </button>
                          </h2>
                        </div>
                        <div
                          id="collapseRpOne"
                          className="collapse show"
                          aria-labelledby="headingRpOne"
                          data-parent="#accordionRp"
                        >
                          <div className="card-body">
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry lorem Ipsu m has been the
                            industrys standard dummy text ever since the when an
                            unknown printer.
                          </div>
                        </div>
                      </div>
                      <div className="card">
                        <div className="card-header" id="headingRpTwo">
                          <h2 className="mb-0">
                            <button
                              className="btn btn-link btn-block text-left collapsed"
                              type="button"
                              data-toggle="collapse"
                              data-target="#collapseRpTwo"
                              aria-expanded="false"
                              aria-controls="collapseRpTwo"
                            >
                              What support i will get in premium package?
                              <span className="icons">
                                <i className="icofont-plus" />
                                <i className="icofont-minus" />
                              </span>
                            </button>
                          </h2>
                        </div>
                        <div
                          id="collapseRpTwo"
                          className="collapse"
                          aria-labelledby="headingRpTwo"
                          data-parent="#accordionRp"
                        >
                          <div className="card-body">
                            Some placeholder content for the second accordion
                            panel. This panel is hidden by default.
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="card">
                        <div className="card-header" id="headingRpThree">
                          <h2 className="mb-0">
                            <button
                              className="btn btn-link btn-block text-left collapsed"
                              type="button"
                              data-toggle="collapse"
                              data-target="#collapseRpThree"
                              aria-expanded="false"
                              aria-controls="collapseRpThree"
                            >
                              Content for the second accordion?
                              <span className="icons">
                                <i className="icofont-plus" />
                                <i className="icofont-minus" />
                              </span>
                            </button>
                          </h2>
                        </div>
                        <div
                          id="collapseRpThree"
                          className="collapse"
                          aria-labelledby="headingRpThree"
                          data-parent="#accordionRp"
                        >
                          <div className="card-body">
                            Some placeholder content for the second accordion
                            panel. This panel is hidden by default.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="support"
                role="tabpanel"
                aria-labelledby="support-tab"
              >
                <div className="accordion" id="accordionTechsup">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="card">
                        <div className="card-header" id="headingTechsupOne">
                          <h2 className="mb-0">
                            <button
                              className="btn btn-link btn-block text-left collapsed"
                              type="button"
                              data-toggle="collapse"
                              data-target="#collapseTechsupOne"
                              aria-expanded="false"
                              aria-controls="collapseTechsupOne"
                            >
                              How app will useful for my business ?
                              <span className="icons">
                                <i className="icofont-plus" />
                                <i className="icofont-minus" />
                              </span>
                            </button>
                          </h2>
                        </div>
                        <div
                          id="collapseTechsupOne"
                          className="collapse"
                          aria-labelledby="headingTechsupOne"
                          data-parent="#accordionTechsup"
                          style={{}}
                        >
                          <div className="card-body">
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry lorem Ipsu m has been the
                            industrys standard dummy text ever since the when an
                            unknown printer.
                          </div>
                        </div>
                      </div>
                      <div className="card">
                        <div className="card-header" id="headingTechsupTwo">
                          <h2 className="mb-0">
                            <button
                              className="btn btn-link btn-block text-left collapsed"
                              type="button"
                              data-toggle="collapse"
                              data-target="#collapseTechsupTwo"
                              aria-expanded="false"
                              aria-controls="collapseTechsupTwo"
                            >
                              Some placeholder content for?
                              <span className="icons">
                                <i className="icofont-plus" />
                                <i className="icofont-minus" />
                              </span>
                            </button>
                          </h2>
                        </div>
                        <div
                          id="collapseTechsupTwo"
                          className="collapse"
                          aria-labelledby="headingTechsupTwo"
                          data-parent="#accordionTechsup"
                          style={{}}
                        >
                          <div className="card-body">
                            Some placeholder content for the second accordion
                            panel. This panel is hidden by default.
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="card">
                        <div className="card-header" id="headingTechsupThree">
                          <h2 className="mb-0">
                            <button
                              className="btn btn-link btn-block text-left active"
                              type="button"
                              data-toggle="collapse"
                              data-target="#collapseTechsupThree"
                              aria-expanded="true"
                              aria-controls="collapseTechsupThree"
                            >
                              Is there any hidden cost?
                              <span className="icons">
                                <i className="icofont-plus" />
                                <i className="icofont-minus" />
                              </span>
                            </button>
                          </h2>
                        </div>
                        <div
                          id="collapseTechsupThree"
                          className="collapse show"
                          aria-labelledby="headingTechsupThree"
                          data-parent="#accordionTechsup"
                          style={{}}
                        >
                          <div className="card-body">
                            Some placeholder content for the second accordion
                            panel. This panel is hidden by default.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* FAQ Tab Section End */}
      </div>
    </div>
  );
};

export default Help;
