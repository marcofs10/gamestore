import React from 'react'
import { useNavigate } from 'react-router-dom'
import { games } from '../../utils/games.js'
import './NotFound.css'

export const NotFound = () => {

    return (
        <div className='notFound'>
            <div className='notFoundContainer'>
                <h1>404</h1>
                <span className='text'>
                    Whoops!
                    <br />
                    We couldn't find that page.
                </span>
                <button>Main Page</button>
            </div>
        </div>
    )
}
