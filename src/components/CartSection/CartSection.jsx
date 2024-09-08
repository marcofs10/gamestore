import React from 'react'
import { GameInCart } from '../GameInCart/GameInCart'
import './CartSection.css'

export const CartSection = ({ isMobile, gamesInCart, setCartDisplayed, toggleCartNavbar, updateCartSection }) => {

    return (
        <section className='cartSection'>
            {!isMobile && <div className='cartOutside' onClick={() => setCartDisplayed(false)}></div>}
            <div className='cartDiv'>
                <p>Games in cart</p>
                {gamesInCart.length === 0 ?
                    <span>{'No games added'}</span>
                    :
                    (gamesInCart.map(game => (<GameInCart
                        isMobile={isMobile}
                        key={game.id}
                        game={game}
                        toggleCartNavbar={toggleCartNavbar}
                        updateCartSection={updateCartSection} />)))}
                {isMobile && <div className='closeButton' onClick={() => setCartDisplayed(false)}>✖</div>}
            </div>
        </section>
    )
}
