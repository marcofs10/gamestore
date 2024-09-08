import React, { useEffect, useState } from 'react'
import { Sidebar } from '../Sidebar/Sidebar';
import { Gamesection } from '../Gamesection/Gamesection.jsx';
import { games } from '../../utils/games.js'
import './SearchPageContent.css'

export const SearchPageContent = ({ queryParam, isMobile, updateCartSection, statusGamesWanted }) => {

    const gamesSearched = games.filter(game => game.name.toLowerCase().includes(queryParam));

    const [gameList, setGameList] = useState(games)
    const [filter, setFilter] = useState("none")

    const filterByPlatform = (platform) => {
        const newgames = [...gameList].filter(game => game.platforms.split(',').includes(platform));
        setFilter(platform)
        setGameList(newgames)
    }

    const orderBy = (criteria, criteriaName) => {
        const newgames = [...gameList].sort((a, b) => a[criteria] < b[criteria] ? 1 : -1);
        setFilter(criteriaName)
        setGameList(newgames)
        if (criteria === 'price') setGameList(newgames.reverse())
    }

    const clearFilter = () => {
        setFilter("none")
        setGameList([...gamesSearched])
    }

    useEffect(() => {
        setGameList(gamesSearched);
        setFilter("none");
    }, [queryParam])


    return (
        <div className="content">
            {!isMobile && <Sidebar filterByPlatform={filterByPlatform} orderBy={orderBy} />}
            <div className='main'>
                <h1>{`Results for: ${queryParam}`}</h1>
                {gameList.length === 0 ?
                    <div className='noResultDiv'>
                        <div>
                            <h1>{':('}</h1>
                            <span>{'No results'}</span>
                        </div>
                    </div>
                    :
                    <Gamesection
                        games={gameList}
                        filter={filter}
                        isMobile={isMobile}
                        clearFilter={clearFilter}
                        updateCartSection={updateCartSection}
                        statusGamesWanted={statusGamesWanted} />
                }

            </div>
        </div>
    )
}
