import React from 'react';
import Header from '../Header/Header';
import Hero from '../Hero/Hero'
import Features from '../Features/Features';
import CallToAction from '../CallToAction/CallToAction';
import Footer from '../Footer/Footer';

const App = () => {
  return (
    <div className="container">
      <Header />
      <Hero />
      <Features />
      <CallToAction/>
      <Footer />
    </div>
  );
};

export default App;
