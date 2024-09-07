import { Link } from 'react-router-dom'
import github from '/images/github.webp'
import cart from '/images/cart.png'
import { SearchBar } from '../SearchBar/SearchBar.jsx'
import './Navbar.css'

export const Navbar = ({isMobile}) => {

    return (
        <nav className="navbar">
            {!isMobile && <Link to="/gamestore" className="logoContainer">
                <h3>Game Store</h3>
            </Link>}
            <SearchBar />
            {!isMobile && <a className="githubContainer" target="_blank" href="https://github.com/marcofs10">
                <img src={github} />
                <h3>marcofs10</h3>
            </a>}
            <div className='cartContainer'>
                <img src={cart} className='cart'/>
                <h3>{`Cart: 0`}</h3>
            </div>
        </nav>
    )
}
