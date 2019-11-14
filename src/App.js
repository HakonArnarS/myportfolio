import React from 'react';
import './App.scss';
import Navigation from './components/navigation/Navigation';
import Intro from './components/intro/Intro';
import About from './components/about/About';
import Works from './components/works/Works';
import Footer from './components/footer/Footer';


const App = () => {

  return (
    <div className="App">
      <Navigation />
      <Intro />
      <About />
      <Works />
      <Footer />

    </div>
  );
}

export default App;
