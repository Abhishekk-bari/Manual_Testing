import { Routes, Route } from "react-router-dom";
import Navbar from "../src/component/Navbar";
import Hero from "./component/Hero";
import Para from "./component/Para";
import Tabs from "./component/Tabs";
import Dashboard from "./component/Dashboard/Dashboard";

export default function App() {
  return (
    <div>
      <Navbar />
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
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
}
