import React from 'react';
import Header from './components/Header';
import MainNav from './components/MainNav';
import Hero from './components/Hero'; 
import Gallery from './components/Gallery'; 
import Footer from './components/Footer';
import './App.css'; 

function App() {
  return (
    <div className="App">
      <Header />
      <MainNav />
      <Hero /> 
      <Gallery /> 
      <Footer />
    </div>
  );
}

export default App;

