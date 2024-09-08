import React from 'react'
import './GameInCart.css'

export const GameInCart = ({ isMobile, game, updateCartSection }) => {

    const removeGameFromCart = () => {
        updateCartSection(game,false)
    }

    return (
        <div className='gameInCart'>
            {!isMobile && <img src={game.thumbnail[0]} alt="" />}
            <section className='details'>
                <p>{game.name}</p>
                <p>{`$${game.price}`}</p>
            </section>
            <button onClick={removeGameFromCart}>✖</button>
        </div>
    )
}
