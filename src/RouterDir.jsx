

// RouterDir.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Portfolio from './Components/Portfolio';
import App from './App'

const RouterDir = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="/whatsup" element={<App />} /> {/* Update the element prop */}
      </Routes>
    </Router>
  );
};

export default RouterDir;
