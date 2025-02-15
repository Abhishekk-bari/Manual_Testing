import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./component/Navbar";
import Hero from "./component/Home/Hero";
// import Para from "./component/Para";
// import Tabs from "./component/Tabs";
import MainContent from "./component/Dashboard/MainContent";
import FunctionalTesting from "./component/Dashboard/Pages/FunctionalTesting";
import PerformanceTesting from "./component/Dashboard/Pages/PerformanceTesting";
import Dashboard from "./component/Dashboard/Dashboard";
import SecurityTesting from "./component/Dashboard/Pages/SecurityTesting";
import CompatibilityTesting from "./component/Dashboard/Pages/CompatibilityTesting";
import UsabilityTesting from "./component/Dashboard/Pages/UsabilityTesting";

import Loader from "./component/Loader/Loader";
import { useEffect, useState } from "react";

import Bento from "./component/Home/Bento";
import Review from "./component/Home/Review";
import Footer from "./component/Home/Footer";
import Work from "./component/Home/Work";
import Features from "./component/Home/Navbar Pages/Features";
import Pricing from "./component/Home/Navbar Pages/Pricing";
import Login from "./component/Home/Navbar Pages/Login";
import LoginPage from "./component/Dashboard/Pages/ChildPages/LoginPage";

export default function App() {
  const location = useLocation();
  const hideNavbar = location.pathname.startsWith("/dashboard") || location.pathname === "/login";
  const [isLoading, setIsLoading] = useState(true); // Add loading state

  // Simulate loading delay (replace with actual loading logic if needed)
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false); // Set loading to false after a delay
    }, 3000); // Adjust the delay as needed

    return () => clearTimeout(timer); // Cleanup timer
  }, []);

  // Show the loader while loading
  if (isLoading) {
    return <Loader />; // Display the Loader component
  }

  return (
    <div>
      {!hideNavbar && <Navbar />}
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Review />
              {/* <Para /> */}
              <Bento />
              <Work />
              <Footer />
              {/* <Tabs /> */}
            </>
          }
        />
        <Route path="/features" element={<Features />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/login" element={<Login />} />

        <Route path="/dashboard" element={<Dashboard />}>
          <Route index element={<MainContent />} />
          <Route path="functional-testing" element={<FunctionalTesting />} />
          <Route path="performance-testing" element={<PerformanceTesting />} />
          <Route path="security-testing" element={<SecurityTesting />} />
          <Route path="usability-testing" element={<UsabilityTesting />} />
          <Route path="compatibility-testing" element={<CompatibilityTesting />} />
          
          <Route path="loginpage-testing" element={<LoginPage />} />

        </Route>
      </Routes>
    </div>
  );
}
