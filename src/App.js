import { Route, Routes, useLocation } from "react-router-dom";

import Home from "./Home/Home";
import "./App.css";
import Footer from "./Components/Footer";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsandConditions from "./pages/TermsandConditions";
import ComplaintPolicy from "./pages/ComplaintPolicy";
import { useLayoutEffect } from "react";
import Header from "./Components/Header";
import About from "./pages/About";
import ContactUs from "./pages/ContactUs";
import Help from "./Help/Help";

function App() {
  const { pathname } = useLocation();
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/help" element={<Help />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-and-conditions" element={<TermsandConditions />} />
        <Route path="/complaint-policy" element={<ComplaintPolicy />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
