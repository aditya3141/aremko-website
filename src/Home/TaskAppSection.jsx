import React, { useEffect, useRef } from 'react';


const TaskAppSection = () => {
  const cardBlockRefs = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      let topStyle = 120;

      cardBlockRefs.current.forEach((card) => {
        const offset = window.pageYOffset || document.documentElement.scrollTop;
        card.style.top = `${topStyle - offset * 0.1}px`; // Adjust 0.1 to control the scroll effect
        topStyle += 30;
      });
    };

    // Set initial top styles
    let initialTopStyle = 120;
    cardBlockRefs.current.forEach((card) => {
      card.style.top = `${initialTopStyle}px`;
      initialTopStyle += 30;
    });

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const features = [
    {
      title: 'Global Payments',
      description:
        'Our platform supports global transactions, allowing you to send and receive payments from anywhere in the world seamlessly and securely.',
      imgA: 'images/feature1a.png',
      imgB: 'images/feature1b.png',
      icon: 'images/feature-icon1.png',
    },
    {
      title: '24/7 Service',
      description:
        'We provide round-the-clock support to ensure your transactions and inquiries are handled promptly, no matter the time of day.',
      imgA: 'images/feature2a.png',
      imgB: 'images/feature2b.png',
      icon: 'images/feature-icon2.png',
    },
    {
      title: 'Competitive Rates',
      description:
        'Enjoy some of the most competitive rates in the industry, ensuring you get the best value for your money with every transaction.',
      imgA: 'images/feature3a.png',
      imgB: 'images/feature3b.png',
      icon: 'images/feature-icon3.png',
    },
    {
      title: 'Safe and Secure',
      description:
        'Our top priority is the security of your transactions. We use advanced encryption and fraud prevention measures to protect your financial information.',
        imgA: 'images/feature3a.png',
        imgB: 'images/feature3b.png',
        icon: 'images/feature-icon3.png',
    },
  ];

  return (
    <section className="row_am task_app_section">
      {features.map((feature, index) => (
        <div
          className="task_block"
          key={index}
          ref={(el) => (cardBlockRefs.current[index] = el)}
        >
          <div className="row">
            <div className="col-md-6">
              <div className="task_img">
                <div className="frame_img">
                  <img src={feature.imgA} alt="feature" />
                </div>
                <div className="screen_img">
                  <img
                    className="moving_animation"
                    src={feature.imgB}
                    alt="feature"
                  />
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="task_text">
                <div className="section_title">
                  <span className="title_badge">Unique Features</span>
                  <span className="icon">
                    <img src={feature.icon} alt="icon" />
                  </span>
                  <h2>{feature.title}</h2>
                  <p>{feature.description}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default TaskAppSection;
