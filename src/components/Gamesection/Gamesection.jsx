import React, { useState } from 'react'
import { Game } from '../Game/Game.jsx'
import grid from '/images/grid.webp'
import list from '/images/list.webp'
import './Gamesection.css'

export const Gamesection = ({ games, filter, isMobile, clearFilter, updateCartSection, statusGamesWanted }) => {

    const [active, setActive] = useState(true);

    const handleLayoutSwitch = () => {
        setActive(!active);
    }

    return (
        <>
            <div className="options">
                <section className="filterContainer">
                    <button aria-label="Current Filter">
                        Filter by:{' '}<span>{filter}</span>
                    </button>
                    <button aria-label="Clear Filters" onClick={clearFilter}>
                        Clear Filter
                    </button>
                </section>
                {!isMobile && <section className="displayContainer">
                    <p>Display options:</p>
                    <button className={active ? "active" : ""} aria-label='Display grids' onClick={handleLayoutSwitch}>
                        <img src={grid} />
                    </button>
                    <button className={!active ? "active" : ""} aria-label='Display rows' onClick={handleLayoutSwitch}>
                        <img src={list} />
                    </button>
                </section>}
            </div>
            <div className={active ? 'gridContainer' : 'rowContainer'}>
                {games.map(game => (<Game key={game.id}
                    game={game}
                    row={!active}
                    updateCartSection={updateCartSection}
                    wanted={statusGamesWanted.find(el => el.id === game.id).wanted} />))}
            </div>
        </>
    )
}
