import React from 'react'
import './IconPlatform.css'

export const IconPlatform = ({icon}) => {
  return (
    <img className='iconPlatform' src={`/images/${icon}.png`}/>
  )
}
