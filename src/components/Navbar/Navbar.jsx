import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import github from '/images/github.webp'
import cart from '/images/cart.png'
import { SearchBar } from '../SearchBar/SearchBar.jsx'
import './Navbar.css'

export const Navbar = ({ isMobile, cartCount, setCartDisplayed }) => {

    const [prevCount, setPrevCount] = useState(cartCount);
    const [triggAnimation, setTriggAnimation] = useState(false)

    const handleOpenCart = () => {
        setCartDisplayed(true)
    }

    useEffect(() => {
        if (cartCount > prevCount) {
            setTriggAnimation(true)
        }
        setPrevCount(cartCount)
    }, [cartCount])

    useEffect(() => {
        const timeout = triggAnimation && setTimeout(() => {
            setTriggAnimation(false)
        }, 500)
        return () => clearTimeout(timeout);
    }, [triggAnimation])

    return (
        <nav className="navbar">
            {!isMobile && <Link to="/gamestore" className="logoContainer">
                <h3>Game Store</h3>
            </Link>}
            <SearchBar />
            {!isMobile &&
                <a className="githubContainer" target="_blank" href="https://github.com/marcofs10/gamestore">
                    <img src={github} />
                    <h3>marcofs10</h3>
                </a>}
            <div className={`cartContainer ${triggAnimation ? 'animation' : ''}`} onClick={handleOpenCart}>
                <img src={cart} className={`cart ${triggAnimation ? 'animationCart' : ''}`} />
                <h3>{`Cart: ${cartCount}`}</h3>
            </div>
        </nav>
    )
}
