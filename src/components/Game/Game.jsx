import React, { useState } from 'react'
import { IconPlatform } from '../IconPlatform/IconPlatform.jsx'
import './Game.css'

export const Game = ({ game, row, updateCartSection, wanted }) => {

    const [hovered, setHovered] = useState(false);
    const [thumbnailShown, setThumbnailShown] = useState(0);

    const handleMouseEnter = () => {
        setHovered(true)
    }

    const handleMouseLeave = () => {
        setHovered(false)
        setThumbnailShown(0)
    }

    const toggleCartElement = (e) => {
        e.stopPropagation();
        updateCartSection(game, !wanted);
    }

    const handleThumbnailShown = (e) => {
        if (hovered) {
            const coordRelativeX = e.clientX - e.target.offsetParent.offsetParent.offsetParent.offsetLeft;
            const division = e.target.clientWidth / 5;
            { division > coordRelativeX ? setThumbnailShown(0) : '' }
            { (division < coordRelativeX) && (coordRelativeX < division * 2) ? setThumbnailShown(1) : '' }
            { (division * 2 < coordRelativeX) && (coordRelativeX < division * 3) ? setThumbnailShown(2) : '' }
            { (division * 3 < coordRelativeX) && (coordRelativeX < division * 4) ? setThumbnailShown(3) : '' }
            { (division * 4 < coordRelativeX) && (coordRelativeX < division * 5) ? setThumbnailShown(4) : '' }
        }
    }

    return (
        <div className={`gameWrapper ${row ? 'gameWrapperRow' : 'gameWrapperGrid'}`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}>
            <div className={`game ${hovered ? 'gameHover' : ''}`}>
                <div className='wrapper'
                    onMouseMove={handleThumbnailShown}>
                    <div className="thumbnail" style={{ backgroundImage: `url(${game.thumbnail[thumbnailShown]})` }} />
                    <div className={`${hovered ? 'thumbnailSelector' : ''}`}>
                        <div className={thumbnailShown === 0 ? 'divActive' : ''}></div>
                        <div className={thumbnailShown === 1 ? 'divActive' : ''}></div>
                        <div className={thumbnailShown === 2 ? 'divActive' : ''}></div>
                        <div className={thumbnailShown === 3 ? 'divActive' : ''}></div>
                        <div className={thumbnailShown === 4 ? 'divActive' : ''}></div>
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
                            <img className={`wishIcon ${wanted ? 'wishIconWanted' : ''}`}
                                src='/images/Gift.png' 
                                onClick={toggleCartElement} />
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