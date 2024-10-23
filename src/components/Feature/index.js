import React from 'react'
import {FeatureContainer, FeatureButton} from './FeatureElements'
import "./app.css"

const Feature = () => {
  return (
    <FeatureContainer>
        <h1>Get Your Favourite Food</h1>
        <p>Lorem ipsum dolor sit amet</p>
        <FeatureButton>Order Now</FeatureButton>
    </FeatureContainer>
  )
}

export default Feature