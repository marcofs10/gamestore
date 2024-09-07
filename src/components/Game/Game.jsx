import React from 'react'
import { IconPlatform } from '../IconPlatform/IconPlatform.jsx'
import './Game.css'

export const Game = ({ game, row }) => {

    return (
        <div className={`gameWrapper ${row ? 'gameWrapperRow' : 'gameWrapperGrid'}`}>
            <div className='game'>
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
                </section>
            </div>
        </div>
    )
}