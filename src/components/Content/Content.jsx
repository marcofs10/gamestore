import React, { useState } from 'react'
import { Sidebar } from '../Sidebar/Sidebar';
import { Gamesection } from '../Gamesection/Gamesection';
import { games } from '../../utils/games.js'

import './Content.css'

export const Content = ({ isMobile }) => {

    const [gameList, setGameList] = useState(games)
    const [filter, setFilter] = useState("none")

    const filterByPlatform = (platform) => {
        const newgames = [...games].filter(game => game.platforms.split(',').includes(platform));
        setFilter(platform)
        setGameList(newgames)
    }

    const orderBy = (criteria, criteriaName) => {
        const newgames = [...games].sort((a, b) => a[criteria] < b[criteria] ? 1 : -1);
        setFilter(criteriaName)
        setGameList(newgames)
        if (criteria === 'price') setGameList(newgames.reverse())
    }

    const clearFilter = () => {
        setFilter("none")
        setGameList([...games])
    }

    return (
        <div className="content">
            {!isMobile && <Sidebar filterByPlatform={filterByPlatform} orderBy={orderBy} />}
            <div className="main">
                <h1>Popular in store</h1>
                <p>Based on player counts and ratings</p>
                <Gamesection
                    games={gameList}
                    filter={filter}
                    isMobile={isMobile}
                    clearFilter={clearFilter} />
            </div>
        </div>
    )
}
