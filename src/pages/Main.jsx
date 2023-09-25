import React from 'react'
import Home from '../components/home/Home'
import Expert from '../components/expert_sec/Expert'
import Reviews from '../components/reviews/Reviews.jsx';
import Contact from '../components/contact/Contact';

const Main = () => {
  return (
    <div>
      {/* <Header /> */}
      <Home />
      <Expert />
      <Reviews />
      <Contact />
    </div>
  )
}

export default Main
