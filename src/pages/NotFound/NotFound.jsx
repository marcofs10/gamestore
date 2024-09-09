import React from 'react'
import { useNavigate } from 'react-router-dom'
import { games } from '../../utils/games.js'
import './NotFound.css'

export const NotFound = () => {

    const navigate = useNavigate();

    const randFootage = Math.floor(Math.random() * games[0].footage.length);
    const randGame = Math.floor(Math.random() * games.length);

    const randomImage = games[randGame].footage[randFootage];

    return (
        <div className='notFound'>
            <div className='randomImage'
                style={{
                    backgroundImage: `linear-gradient(270deg,transparent,crimson),url(${randomImage})`,
                }}></div>
            <div className='notFoundContainer'>
                <h1>404</h1>
                <span className='text'>
                    Whoops!
                    <br />
                    We couldn't find that page.
                </span>
                <button onClick={() => navigate('/gamestore/')}>Main Page</button>
            </div>
        </div>
    )
}
