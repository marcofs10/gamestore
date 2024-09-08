import React from 'react'
import { Link } from 'react-router-dom'
import { Carousel } from '../Carousel/Carousel'
import { IconPlatform } from '../IconPlatform/IconPlatform'
import './GamePageContent.css'

export const GamePageContent = ({ game }) => {

    return (
        <div className='gamePageContent'>
            <div className='upperContainer'>
                <Link to={-1} className='linkReturn'><img className='arrowReturn' src='/images/left.png'/>Go back</Link>
                <h1>{game.name}</h1>
            </div>
            <section className='contentContainer'>
                <Carousel game={game} />
                <div className='gameInfoContainer'>
                    <div className='platforms'>
                        {game.platforms.split(',').map(icon => (<IconPlatform key={icon} icon={icon} principalPage={true} />))}
                    </div>
                    <div className='scrollableContainer'>
                        <div className='innerScrollable'>
                            <h2>About</h2>
                            <p>{JSON.parse(JSON.stringify(game)).about}</p>
                            <a target="_blank" href={game.link}>{`${game.name} website`}<img className='arrowLinkGame' src='/images/right.png' /></a>
                            <div className='gameDetails'>
                                <div className='gameDetailsElement'>
                                    <span>Score</span>
                                    <p>{game.rating}</p>
                                </div>
                                <div className='gameDetailsElement'>
                                    <span>Age Rating</span>
                                    <p>{game.ageRestriction}</p>
                                </div>
                                <div className='gameDetailsElement'>
                                    <span>Release Date</span>
                                    <p>{game.release}</p>
                                </div>
                                <div className='gameDetailsElement'>
                                    <span>Genre</span>
                                    <p>{game.genre}</p>
                                </div>
                                <div className='gameDetailsElement'>
                                    <span>Developer</span>
                                    <p>{game.developer}</p>
                                </div>
                                <div className='gameDetailsElement'>
                                    <span>Publisher</span>
                                    <p>{game.publisher}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='footerPrice'>
                        <span>{`$${game.price}`}</span>
                        <button>
                            <img src='/images/Gift.png' />
                            <p>Add to cart</p>
                        </button>
                    </div>
                </div>
            </section>
        </div>
    )
}