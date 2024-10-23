import React from 'react'
import Pizza from './Pizza'
import { PizzaData } from '../../components/Products/data'


const PizzaIndex = () => {
  return (
    <Pizza heading="Best Pizza For You" data={PizzaData}/>
  )
}

export default PizzaIndex
