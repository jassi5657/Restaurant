import React from 'react'
import { Link } from 'react-router-dom'
import Pizza from "../../routes/pizza/Pizza"


import {HeroContainer, HeroContent, HeroItems,HeroH1,HeroP,HeroBtn,HeroImg,HeroLogoh1} from './HeroElements'
import logo from "../../images/logo.jpg"
import "../../App.css"
const Hero = () => {
  

  
  return (
    
    
    <HeroContainer>
        <HeroContent>
          <HeroImg src={logo} className="logo"/>
          <>
          
        <small className='name-logo'>Dragon Restaurant</small>
          </>
          
          <HeroItems>
            
            <HeroH1>Greatest Pizza Ever</HeroH1>
            <HeroP>Ready in 60 Seconds</HeroP>
            
            <HeroBtn ><Link to="/pizza-index" className='link' >Place Order</Link></HeroBtn>

            
            </HeroItems>
        </HeroContent>
    </HeroContainer>
  )
}

export default Hero
