import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Error from './pages/Error';
import Logement from './pages/Logement';
import Header from './components/Header';
import Footer from './components/Footer';
import styles from './index.module.css';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className={styles.root}>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/apropos" element={<About />} />
          <Route path="/logement/:id" element={<Logement />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  </React.StrictMode>,
);