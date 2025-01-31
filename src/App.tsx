import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "../src/component/Navbar";
import Hero from "./component/Hero";
import Para from "./component/Para";
import Tabs from "./component/Tabs";
import MainContent from "./component/Dashboard/MainContent";
import FunctionalTesting from "./component/Dashboard/Pages/FunctionalTesting";
import PerformanceTesting from "./component/Dashboard/Pages/PerformanceTesting";
import Dashboard from "./component/Dashboard/Dashboard";
import SecurityTesting from "./component/Dashboard/Pages/SecurityTesting";

export default function App() {
  const location = useLocation();
  const hideNavbar = location.pathname.startsWith("/dashboard");

  return (
    <div>
{!hideNavbar && <Navbar />}
<Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Tabs />
              <Para />
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