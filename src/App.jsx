import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import CompanyLogo from "./components/CompanyLogo";
import PurposeSection from "./components/PurposeSection";
import ScheduleSection from "./components/ScheduleSection";
import MonitorSection from "./components/MonitorSection";
import TestimonialsSection from "./components/TestimonialsSection";
import Footer from "./components/Footer";
import About from "./components/About";
import Residential from "./components/Residential";
import Commercial from "./components/Commercial";
import FormPage from "./components/FormPage"; 
import SuccessPage from "./components/Success"; // ✅ Import Success Page

function Layout() {
  const location = useLocation();
  
  // ✅ Hide Navbar on Apply & Success pages
  const showNavbar =
    location.pathname !== "/about" &&
    location.pathname !== "/residential" &&
    location.pathname !== "/commercial" &&
    location.pathname !== "/apply" &&
    location.pathname !== "/success"; // ✅ Hides Navbar on Success Page too

  return (
    <main className="relative min-h-screen overflow-x-hidden">
      {/* Background gradient effect */}
      <div className="absolute -top-28 -left-28 w-[500px] h-[500px] bg-gradient-to-tr from-indigo-500/20 to-pink-500/20 rounded-full blur-[80px] -z-10"></div>
      
      <div className="overflow-hidden">
        {showNavbar && <Navbar />}

        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <CompanyLogo />
              <PurposeSection />
              <ScheduleSection />
              <MonitorSection />
              <TestimonialsSection />
              <Footer />
            </>
          } />
          <Route path="/about" element={<About />} />
          <Route path="/residential" element={<Residential />} />
          <Route path="/commercial" element={<Commercial />} />
          <Route path="/apply" element={<FormPage />} /> {/* ✅ Form Page without Navbar */}
          <Route path="/success" element={<SuccessPage />} /> {/* ✅ Success Page without Navbar */}
        </Routes>
      </div>
    </main>
  );
}

function App() {
  return (
    <Router>
      <Layout />
    </Router>
  );
}

export default App;
