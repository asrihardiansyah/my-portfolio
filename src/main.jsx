import { StrictMode, useEffect } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Navbar from "./components/Navbar.jsx";
import Preloader from "./components/Preloader.jsx";
import Footer from "./components/Footer.jsx"; 

import "remixicon/fonts/remixicon.css";
import "animate.css";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Preloader />
    <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12 overflow-x-hidden">
      <Navbar />
      <App />
      <Footer />
    </div>
  </StrictMode>,
)
