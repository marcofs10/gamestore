import React, { useState } from 'react'
import { useSearchParams } from 'react-router-dom';
import { Navbar } from '../../components/Navbar/Navbar';
import { CartSection } from '../../components/CartSection/CartSection';
import { SearchPageContent } from '../../components/SearchPageContent/SearchPageContent';
import { games } from '../../utils/games.js';
import './SearchPage.css'

export const SearchPage = ({ isMobile, updateCartSection, statusGamesWanted }) => {

    const [searhParams, setSearchParams] = useSearchParams();
    const queryParam = searhParams.get('q')
    
    const [cartDisplayed, setCartDisplayed] = useState(false);

    return (
        <section className='queryPage'>
            {cartDisplayed && <CartSection 
                isMobile={isMobile}
                gamesInCart={statusGamesWanted.filter(el=>el.wanted===true).map(el=>games.find(game=>game.id===el.id))}
                setCartDisplayed={setCartDisplayed} 
                updateCartSection={updateCartSection}/>}
            <Navbar
                isMobile={isMobile}
                setCartDisplayed={setCartDisplayed}
                cartCount={(statusGamesWanted.filter(el => el.wanted === true)).length} />
            <SearchPageContent
                queryParam={queryParam}
                isMobile={isMobile} 
                updateCartSection={updateCartSection}
                statusGamesWanted={statusGamesWanted}/>
        </section>
    )
}
