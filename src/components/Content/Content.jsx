import React from 'react'
import { Sidebar } from '../Sidebar/Sidebar';
import { Gamesection } from '../Gamesection/Gamesection';
import { games } from '../../utils/games.js'

import './Content.css'

export const Content = ({ isMobile }) => {

    return (
        <div className="content">
            {!isMobile && <Sidebar />}
            <div className="main">
                <h1>Popular in store</h1>
                <p>Based on player counts and ratings</p>
                <Gamesection
                    games={games}
                    isMobile={isMobile} />
            </div>
        </div>
    )
}
