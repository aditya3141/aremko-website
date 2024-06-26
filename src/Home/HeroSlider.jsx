import React from 'react';

const HeroSlider = () => {
    return (
        <div className="hero-slider-two owl-carousel owl-loaded owl-drag">
            <div className="owl-stage-outer owl-height" style={{ height: '691.031px' }}>
                <div className="owl-stage" style={{ transform: 'translate3d(-1736px, 0px, 0px)', transition: 'all 0s ease 0s', width: '3038px' }}>
                    <SlideItem
                        imgSrc="assets/img/hero/hero-slide-5.png"
                        spanText="Reliable. Zero Service Charge"
                        h1Text="Move Your Money In Easy Secured Steps"
                        pText="Dea of denouncing pleasure and praising pain was born and lete system, and expound the ac teachings aitems to sed quia non numquam amet sit dolor."
                        btnLink="service-one.html"
                    />
                    <SlideItem
                        imgSrc="assets/img/hero/hero-slide-6.png"
                        spanText="Easy. Fastest . Secure"
                        h1Text="Secured & Easy Online Payment Solution"
                        pText="Dea of denouncing pleasure and praising pain was born and lete system, and expound the ac teachings aitems to sed quia non numquam amet sit dolor."
                        btnLink="service-two.html"
                    />
                    <SlideItem
                        imgSrc="assets/img/hero/hero-slide-4.png"
                        spanText="Simple. Transparent. Secure"
                        h1Text="Fast & Secure Online Money Transfer"
                        pText="Dea of denouncing pleasure and praising pain was born and lete system, and expound the ac teachings aitems to sed quia non numquam amet sit dolor."
                        btnLink="service-three.html"
                    />
                    {/* Add more SlideItem components as needed */}
                </div>
            </div>
        </div>
    );
}

const SlideItem = ({ imgSrc, spanText, h1Text, pText, btnLink }) => {
    return (
        <div className="owl-item">
            <div className="hero-slide-item">
                <div className="container-fluid">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="hero-content">
                                <span>{spanText}</span>
                                <h1>{h1Text}</h1>
                                <p>{pText}</p>
                                <a href={btnLink} className="btn style1">Get Started</a>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="hero-img-wrap">
                                <img src={imgSrc} alt="Image" />
                            </div>
                        </div>                    </div>
                </div>
            </div>
        </div>
    );
}

export default HeroSlider;
