import React, { useState } from 'react'
import './Carousel.css'

export const Carousel = ({ game }) => {

    return (
        <div className='footageImg' style={{ backgroundImage: `url(${game.footage[1]})` }}></div>
    )
}