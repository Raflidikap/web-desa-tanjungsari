import React from 'react';
import './App.css';
import Header from "./components/Header"
import Topografi from "./components/Topografi"
import Carousel from "./components/Carousel"
import Beranda from "./components/Beranda"
function App() {
  return (
    <div className="App">
      <Header/>
      <Carousel/>
      <Beranda/>
      <Topografi/>
    </div>
  );
}

export default App;
