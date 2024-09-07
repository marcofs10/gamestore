import React from 'react'
import { Navbar } from '../../components/Navbar/Navbar.jsx'
import { Content } from '../../components/Content/Content.jsx';
import './HomePage.css'

export const HomePage = ({ isMobile }) => {

    return (
        <section className='home'>
            <Navbar isMobile={isMobile} />
            <Content isMobile={isMobile} />
        </section>
    )
}
