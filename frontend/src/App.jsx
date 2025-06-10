// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Accueil from "./pages/Accueil";
import Boutique from "./pages/Boutique";
import Lab from "./pages/Lab";
import './styles/layout.scss';

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Accueil />} />
            <Route path="/boutique" element={<Boutique />} />
            <Route path="/lab" element={<Lab />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
