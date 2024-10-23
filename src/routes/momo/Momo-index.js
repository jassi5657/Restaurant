import React from 'react'
import Momo from './Momo'
import { MomoData } from '../../components/Products/data'


const MomoIndex = () => {
  return (
    <Momo heading="Best Momo For You" data={MomoData}/>
  )
}

export default MomoIndex
