import React, { useState } from 'react'
import { Game } from '../Game/Game.jsx'
import grid from '/images/grid.webp'
import list from '/images/list.webp'
import './Gamesection.css'

export const Gamesection = ({ games, isMobile }) => {

    const [active, setActive] = useState(true);

    const handleLayoutSwitch = () => {
        setActive(!active);
    }

    return (
        <>
            <div className="options">
                <section className="filterContainer">
                    <button className="filterButton" aria-label="Current Filter">
                        Filter by:{' '}<span>none</span>
                    </button>
                    <button className="filterButton clearButton" aria-label="Clear Filters">
                        Clear Filter
                    </button>
                </section>
                {!isMobile && <section className="displayContainer">
                    <p>Display options:</p>
                    <button className={`${active ? "active" : ""} displayButton`} aria-label='Display grids' onClick={handleLayoutSwitch}>
                        <img src={grid} className="displayItem" />
                    </button>
                    <button className={`${!active ? "active" : ""} displayButton`} aria-label='Display rows' onClick={handleLayoutSwitch}>
                        <img src={list} />
                    </button>
                </section>}
            </div>
            <div className={active ? 'gridContainer' : 'rowContainer'}>
                {games.map(game => (<Game key={game.id}
                    game={game}
                    row={!active} />))}
            </div>
        </>
    )
}
