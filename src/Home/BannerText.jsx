import React from "react";
import { motion } from "framer-motion";
import { ReactTyped } from "react-typed";


const BannerText = () => {
  return (
    <div className="banner_text">
      {/* typed text */}
      <div className="type-wrap">
        {/* add static words/sentences here (i.e. text that you don't want to be removed) */}
        <span
          id="typed"
          style={{ whiteSpace: "pre", color: '#fff' }}
          className="typed text-white"
        >
          <ReactTyped
            strings={[
              "Fast, Safe and Convenient Money Transfer",
              "Super-Easy Currency Conversion",
              "Reliable International Transfers"
            ]}
            typeSpeed={50}
            backSpeed={30}
            loop
          />
        </span>
      </div>
      {/* h1 */}
      <motion.h1
        className="text-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Fast, Safe and<span> Convenient Money Transfer</span>
      </motion.h1>
      {/* p */}
      <motion.p
        className="text-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        Aremko Pay Makes Currency Conversion And International
        Transfers Super-Easy.
      </motion.p>
    </div>
  );
};

export default BannerText;
