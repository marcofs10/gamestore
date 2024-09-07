import React, { useState } from 'react'
import { IconPlatform } from '../IconPlatform/IconPlatform.jsx'
import './Game.css'

export const Game = ({ game, row }) => {

    const [hovered, setHovered] = useState(false);

    const handleMouseEnter = () => {
        setHovered(true)
    }

    const handleMouseLeave = () => {
        setHovered(false)
        setThumbnailShown(0)
    }

    return (
        <div className={`gameWrapper ${row ? 'gameWrapperRow' : 'gameWrapperGrid'}`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}>
            <div className={`game ${hovered ? 'gameHover' : ''}`}>
                <div className='wrapper'>
                    <div className="thumbnail" style={{ backgroundImage: `url(${game.thumbnail[0]})` }} />
                    <div>
                        <div className='divActive'></div>
                    </div>
                </div>
                <section className='info'>
                    <section className='details'>
                        <div className='platforms'>
                            {game.platforms.split(',').map(icon => (<IconPlatform key={icon} icon={icon} />))}
                        </div>
                        <p className='price'>{`$${game.price}`}</p>
                    </section>
                    <h2>{game.name}</h2>
                    {(hovered) && (
                        <div>
                            <img className='wishIcon'
                                src='/images/Gift.png' />
                            <ul>
                                <li>
                                    <span>Score:</span>
                                    <span>{game.rating}</span>
                                </li>
                                <li>
                                    <span>Release Date:</span>
                                    <span>{game.release}</span>
                                </li>
                                <li>
                                    <span>Genres:</span>
                                    <span>{game.genre}</span>
                                </li>
                            </ul>
                        </div>)}
                </section>
            </div>
        </div>
    )
}