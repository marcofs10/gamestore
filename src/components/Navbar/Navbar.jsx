import { Link } from 'react-router-dom'
import github from '/images/github.webp'
import cart from '/images/cart.png'
import { SearchBar } from '../SearchBar/SearchBar.jsx'
import './Navbar.css'

export const Navbar = ({ isMobile, cartCount, setCartDisplayed }) => {

    const handleOpenCart = () => {
        setCartDisplayed(true)
    }

    return (
        <nav className="navbar">
            {!isMobile && <Link to="/gamestore" className="logoContainer">
                <h3>Game Store</h3>
            </Link>}
            <SearchBar />
            {!isMobile && <a className="githubContainer" target="_blank" href="https://github.com/marcofs10/gamestore">
                <img src={github} />
                <h3>marcofs10</h3>
            </a>}
            <div className='cartContainer' onClick={handleOpenCart}>
                <img src={cart} className='cart'/>
                <h3>{`Cart: ${cartCount}`}</h3>
            </div>
        </nav>
    )
}
