import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";  // Adjust the import based on your folder structure
import { Loader } from "./components/Loader";  // Import the Loader component
 import "./index.css"
function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulating data load with a timeout (replace this with actual loading logic)
    setTimeout(() => {
      setLoading(false);  // Set loading to false after 2 seconds
    }, 2000);
  }, []);

  return (
    <Router>
      {loading ? (
        <Loader />  // Show the loader while loading
      ) : (
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      )}
    </Router>
  );
}

export default App;
