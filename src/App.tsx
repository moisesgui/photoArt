import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import ClientArea from './components/ClientArea';
import Footer from './components/Footer';
import Checkout from './components/Checkout';

function App() {
  const path = window.location.pathname;

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      {path === '/' && (
        <>
          <Hero />
          <Services />
          <Gallery />
          <Testimonials />
          <ClientArea />
          <Footer />
        </>
      )}
      {path === '/checkout' && <Checkout />}
    </div>
  );
}

export default App;