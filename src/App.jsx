import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Beranda from "./pages/Beranda"
import Header from './components/Header'
import ProfileDesa from "./pages/Profile-Desa"
import UMKM from "./pages/Umkm"
import Footer from './components/Footer';
function App() {
  return (
    <div className="App">
      {/* <Carousel/>
      <Beranda/>
      <Topografi/> */ }
      <Header/>
      <Router>
        <Routes>
          <Route path="/" element={<Beranda/>} />
          <Route path="/profiledesa" element={<ProfileDesa/>} />
          <Route path="/umkm" element={<UMKM/>} />
        </Routes>
      </Router>
      <Footer/>
    </div>
  );
}

export default App;
