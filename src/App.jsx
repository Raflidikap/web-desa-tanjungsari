import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Beranda from "./pages/Beranda"
import Header from './components/Header'
import ProfileDesa from "./pages/Profile-Desa"
import UMKM from "./pages/Umkm"
function App() {
  return (
    <div className="App">
      {/* <Carousel/>
      <Beranda/>
      <Topografi/> */ }
      <Header/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Beranda/>} />
          <Route path="/profiledesa" element={<ProfileDesa/>} />
          <Route path="/umkm" element={<UMKM/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
