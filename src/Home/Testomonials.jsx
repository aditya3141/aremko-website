import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Testimonials.css'; // Assuming you have a CSS file for the styles

const testimonialsData = [
  {
    quote: "Lorem ipsum dolor sit amet adi elition repell tetur delni vel quam aliq earum explibo dolor eme fugiat amet dolor lorem sit consect.",
    name: "Jim Morison",
    position: "Director, BAT",
    imgSrc: "assets/img/testimonials/client-1.jpg"
  },
  {
    quote: "Lorem ipsum dolor sit amet adi elition repell tetur delni vel quam aliq earum explibo dolor eme fugiat amet dolor lorem sit consect.",
    name: "Alex Cruis",
    position: "CEO, IBAC",
    imgSrc: "assets/img/testimonials/client-2.jpg"
  },
  {
    quote: "Lorem ipsum dolor sit amet adi elition repell tetur delni vel quam aliq earum explibo dolor eme fugiat amet dolor lorem sit consect.",
    name: "Tom Haris",
    position: "Engineer, Olleo",
    imgSrc: "assets/img/testimonials/client-3.jpg"
  },
  {
    quote: "Lorem ipsum dolor sit amet adi elition repell tetur delni vel quam aliq earum explibo dolor eme fugiat amet dolor lorem sit consect.",
    name: "Harry Jackson",
    position: "Entrepreneur",
    imgSrc: "assets/img/testimonials/client-4.jpg"
  },
  {
    quote: "Lorem ipsum dolor sit amet adi elition repell tetur delni vel quam aliq earum explibo dolor eme fugiat amet dolor lorem sit consect.",
    name: "Chris Haris",
    position: "MD, ITec",
    imgSrc: "assets/img/testimonials/client-5.jpg"
  },
  {
    quote: "Lorem ipsum dolor sit amet adi elition repell tetur delni vel quam aliq earum explibo dolor eme fugiat amet dolor lorem sit consect.",
    name: "Mark Owen",
    position: "Entrepreneur",
    imgSrc: "assets/img/testimonials/client-6.jpg"
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const index = currentIndex === 0 ? testimonialsData.length - 1 : currentIndex - 1;
    setCurrentIndex(index);
  };

  const nextSlide = () => {
    const index = currentIndex === testimonialsData.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(index);
  };

  return (
    <section className="testimonial-wrap pt-100 pb-75 bg-albastor">
      <div className="container">
        <div className="row">
          <div className="col-xl-6 offset-xl-3 col-lg-8 offset-lg-2">
            <div className="section-title style1 text-center mb-40">
              <span>Our Testimonials</span>
              <h2>What Client Says About Us</h2>
            </div>
          </div>
        </div>
        <div className="testimonial-slider">
          <button className="prev" onClick={prevSlide}>❮</button>
          <div className="testimonial-card-container">
            <AnimatePresence initial={false}>
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
       
                transition={{ duration: 0.5 }}
                className="testimonial-card style1"
              >
                <div className="client-info-area">
                  <div className="client-info-wrap">
                    <div className="client-img">
                      <img src={testimonialsData[currentIndex].imgSrc} alt="Client" />
                    </div>
                  </div>
                  <div className="quote-icon">
                    <i className="flaticon-quote"></i>
                  </div>
                </div>
                <p className="client-quote">{testimonialsData[currentIndex].quote}</p>
                <div className="client-info">
                  <h3>{testimonialsData[currentIndex].name}</h3>
                  <span>{testimonialsData[currentIndex].position}</span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
          <button className="next" onClick={nextSlide}>❯</button>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
