// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useLocation } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

const Layout = ({ children }) => {
  const location = useLocation();

  // Determine if the current page is the Home page
  const isHomePage = location.pathname === '/';

  return (
    <>
      <nav>
        {isHomePage ? (
          <div className="name">Your Name</div>
        ) : (
          <Link to="/" className="back-to-home">Back to Home</Link>
        )}
      </nav>
      {children}
    </>
  );
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<Layout><Home /></Layout>}
        />
        <Route
          path="/about"
          element={<Layout><About /></Layout>}
        />
        <Route
          path="/projects"
          element={<Layout><Projects /></Layout>}
        />
        <Route
          path="/contact"
          element={<Layout><Contact /></Layout>}
        />
      </Routes>
    </Router>
  );
};

export default App;
