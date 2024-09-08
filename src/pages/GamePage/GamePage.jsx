import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { Navbar } from '../../components/Navbar/Navbar.jsx'
import { CartSection } from '../../components/CartSection/CartSection.jsx'
import { GamePageContent } from '../../components/GamePageContent/GamePageContent.jsx'
import { games } from '../../utils/games.js'
import './GamePage.css'
import { GamePageVertical } from '../../components/GamePageVertical/GamePageVertical.jsx'

export const GamePage = ({ isMobile, vertical, updateCartSection, statusGamesWanted }) => {

    const [cartDisplayed, setCartDisplayed] = useState(false);

    const { codename } = useParams();

    const gameSelected = games.filter(game => game.codename === codename);

    return (
        <section className='gamePage'>
            {cartDisplayed && <CartSection
                isMobile={isMobile}
                gamesInCart={statusGamesWanted.filter(el => el.wanted === true).map(el => games.find(game => game.id === el.id))}
                setCartDisplayed={setCartDisplayed}
                updateCartSection={updateCartSection} />}
            <Navbar
                isMobile={isMobile}
                setCartDisplayed={setCartDisplayed}
                cartCount={(statusGamesWanted.filter(el => el.wanted === true)).length} />
            {vertical ?
                <GamePageVertical game={gameSelected[0]}
                    wanted={statusGamesWanted.find(el => el.id === gameSelected[0].id).wanted}
                    updateCartSection={updateCartSection} /> :
                <GamePageContent game={gameSelected[0]}
                    wanted={statusGamesWanted.find(el => el.id === gameSelected[0].id).wanted}
                    updateCartSection={updateCartSection} />}
        </section>
    )
}
