import React from 'react'
import { Carousel } from '../Carousel/Carousel'
import { IconPlatform } from '../IconPlatform/IconPlatform'
import './GamePageVertical.css'

export const GamePageVertical = ({ game }) => {

    return (
        <div className='gamePageContentVertical'>
            <h1>{game.name}</h1>
            <section className='contentContainerVertical'>
                <Carousel game={game}/>
                <div className='besidesCarousel'>
                    <div className='gameInfoContainerVertical'>
                        <div className='platforms'>
                            {game.platforms.split(',').map(icon => (<IconPlatform key={icon} icon={icon} principalPage={false} />))}
                        </div>
                        <h2>About</h2>
                        <p>{JSON.parse(JSON.stringify(game)).about}</p>
                    </div>
                    <div className='gameInfoContainerVertical'>
                        <a target="_blank" href={game.link}>{`${game.name} website`}<img className='arrowLinkGameVertical' src='/images/right.png'/></a>
                        <div className='gameDetailsVertical'>
                            <div className='gameDetailsElementVertical'>
                                <span>Score</span>
                                <p>{game.rating}</p>
                            </div>
                            <div className='gameDetailsElementVertical'>
                                <span>Age Rating</span>
                                <p>{game.ageRestriction}</p>
                            </div>
                            <div className='gameDetailsElementVertical'>
                                <span>Release Date</span>
                                <p>{game.release}</p>
                            </div>
                            <div className='gameDetailsElementVertical'>
                                <span>Genre</span>
                                <p>{game.genre}</p>
                            </div>
                            <div className='gameDetailsElementVertical'>
                                <span>Developer</span>
                                <p>{game.developer}</p>
                            </div>
                            <div className='gameDetailsElementVertical'>
                                <span>Publisher</span>
                                <p>{game.publisher}</p>
                            </div>
                        </div>
                        <div className='footerPriceVertical'>
                            <span>{`$${game.price}`}</span>
                            <button>
                                <img src='/images/Gift.png' />
                                <p>Add to cart</p>
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}