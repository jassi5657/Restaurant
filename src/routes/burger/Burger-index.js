import React from 'react'
import Burger from './Burger'
import { productDataThree, BurgerData } from '../../components/Products/data'
const BurgerIndex = () => {
  return (
    
    <Burger heading="Best Burger For You" data={BurgerData}/>
  )
}

export default BurgerIndex
