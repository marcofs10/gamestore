import React, { useState } from 'react'
import { Navbar } from '../../components/Navbar/Navbar.jsx'
import { Content } from '../../components/Content/Content.jsx';
import { CartSection } from '../../components/CartSection/CartSection.jsx';
import { games } from '../../utils/games.js';
import './HomePage.css'

export const HomePage = ({ isMobile, updateCartSection, statusGamesWanted }) => {

    const [cartDisplayed, setCartDisplayed] = useState(false);

    if (cartDisplayed) {
        document.documentElement.style.margin = "0";
        document.documentElement.style.height = "100%";
        document.documentElement.style.overflowY = "hidden";
        document.body.style.overflowY = "hidden";
        document.body.style.margin = "0";
        document.body.style.height = "100%";
    } else {
        document.documentElement.style.overflowY = "auto";
        document.body.style.overflowY = "auto";
    }

    return (
        <section className='home'>
            {cartDisplayed && <CartSection
                isMobile={isMobile}
                gamesInCart={statusGamesWanted.filter(el => el.wanted === true).map(el => games.find(game => game.id === el.id))}
                setCartDisplayed={setCartDisplayed}
                updateCartSection={updateCartSection} />}
            <Navbar 
                isMobile={isMobile}
                setCartDisplayed={setCartDisplayed}
                cartCount={(statusGamesWanted.filter(el => el.wanted === true)).length} />
            <Content 
                isMobile={isMobile}
                updateCartSection={updateCartSection}
                statusGamesWanted={statusGamesWanted} />
        </section>
    )
}
