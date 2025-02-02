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
import Loader from './component/Loader/Loader'
import { useEffect, useState } from "react";
import Features from "./component/Home/Features";
// import Feature from "./component/Feature";

export default function App() {
  const location = useLocation();
  const hideNavbar = location.pathname.startsWith("/dashboard");
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
              <Features />
              {/* <Para /> */}
              {/* <Tabs /> */}
              {/* <Feature/> */}
            </>
          }
        />
        <Route path="/dashboard" element={<Dashboard />}>
          <Route index element={<MainContent />} />
          <Route path="functional-testing" element={<FunctionalTesting />} />
          <Route path="performance-testing" element={<PerformanceTesting />} />
          <Route path="security-testing" element={<SecurityTesting />} />
          
        </Route>
      </Routes>
    </div>
  );
}