import React from 'react';
import './resources/styles.css';
import {Element} from 'react-scroll';

import Header from './components/header_footer/Header';
import Home from './components/home';
import VenueNfo from './components/venueNfo';
import Highlight from './components/highlights'
import Pricing from './components/pricing';
import Location from './components/location';
import Footer from './components/header_footer/Footer'

function App() {
  
  return (
    <div  className="App" style={{height:"1429px", background:'cornflowerblue'}}>
       <Header />
       <Element  name="home" >
       <Home />
       </Element>
       <Element  name="info" >
       <VenueNfo />
       </Element>
       <Element  name="highlights" >
       <Highlight/> 
       </Element>
       <Element  name="pricing" >
       <Pricing />
       </Element>
       <Element  name="location" >
       <Location />
       </Element>
       
       <Footer/>
    </div>
  );
}

export default App;
