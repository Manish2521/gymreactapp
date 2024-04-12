import React from 'react';
import Navbar from './assets/components/Navbar'; 
import Card from './assets/components/Card'; 
import 'bootstrap/dist/css/bootstrap.min.css'; 
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Contact from './assets/Pages/Contact'; 
import About from './assets/Pages/About'; 
import CardGrid from './assets/Pages/CardGrid'; 
import Footer from './assets/components/Footer'; 
import PricingCard from './assets/components/PricingCard'; 
import MyComponent from './assets/components/MyComponent'; 

class App extends React.Component {
  render() {
    return (
      <>
        <Navbar />
        {/* <MyComponent /> */}
        <Card />
        <CardGrid/>
        {/* <PricingCard /> */}
        <Footer/>
      </>
    );
  }
}

export default App;




