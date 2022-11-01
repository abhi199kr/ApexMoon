import logo from './logo.svg';

import Header from './Components/Header';
import D1 from './Components/D1';
import D2 from './Components/D2';
import D3 from './Components/D3';
import Services from './Components/Services';
import Domain from './Components/Domain';
import Stealth from './Components/Stealth';
import Valuation from './Components/Valuation';
import Portfolio from './Components/Portfolio';
import Footer from './Components/Footer';
import Contact from './Components/Contact';
import Feature from './Components/Feature';
import Swipe from './Components/Swipe';
import Sold from './Components/Sold';
import Footeru from './Components/Footeru';
import Testimonial from './Components/Testimonial';
import { Carousel } from 'react-bootstrap';
import Need from './Components/Need';

function App() {
  return (
    <>
     
      <Header/>
      <D1/>
      <D2/>
      <D3/>
      <Swipe/>
      {/* <Feature/> */}
      <Sold/>
      <Services/>
      <Domain/>
      <Stealth/>
      <Valuation/>
      <Portfolio/>
      <Contact/>
      <Testimonial/>
      {/* <Carousel/> */}
      <Need/>
      <Footeru/>
      <Footer/>
    </>
  );
}

export default App;
