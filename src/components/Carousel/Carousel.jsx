import React, { useState } from 'react'
import './Carousel.css'

export const Carousel = ({ game, vertical }) => {

    const [visible, setVisible] = useState(0);

    const previous = () => {
        const nextImage = visible > 0 ? visible - 1 : game.footage.length - 1;
        setVisible(nextImage);
    }

    const next = () => {
        const nextImage = visible < game.footage.length - 1 ? visible + 1 : 0;
        setVisible(nextImage);
    }

    return (
        <div className='carousel'>
            <div className='imgSlider'>
                {game.footage.map(image => (<img key={image} src={image} className='footageImg' style={{ translate: `${-100 * visible}%` }} />))}
            </div>
            <img className='arrow left' src='/images/left.png' onClick={previous} />
            <img className='arrow right' src='/images/right.png' onClick={next} />
            {!vertical && <div className='buttonContainer'>
                {game.footage.map((el, index) => (
                    <button key={el} className={`sliderButton ${index === visible ? 'sliderButtonActive' : ''}`} onClick={() => setVisible(index)}>
                    </button>
                ))}
            </div>}
        </div>
    )
}