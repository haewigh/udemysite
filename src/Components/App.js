import React from 'react';
import './App.css';
import Menu from './Menu' ;
import Hero from './Hero' ;
import Customer from './Customer' ;
import Cta from './Cta' ;
import Training from './Training' ;
import Popular from './Popular' ;
import Testimonial from './Testimomial';
import Categories from './Categories';
import Instructor from './Instructor';
import Footer from './Footer'

function App() {
  return (
    <div>
      <Menu />
      <Hero />
      <Customer />
      <Cta />
      <Training />
      <Popular />
      <Testimonial />
      <Categories />
      <Instructor />
      <Footer />
    </div>
  );
}

export default App;
