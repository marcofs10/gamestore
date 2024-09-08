import { useEffect, useState } from 'react'
import { Routes, Route } from "react-router-dom";
import { HomePage } from './pages/HomePage/HomePage.jsx';
import { GamePage } from './pages/GamePage/GamePage.jsx';
import { SearchPage } from './pages/SearchPage/SearchPage.jsx';
import { NotFound } from './pages/NotFound/NotFound.jsx';
import { statusWantedModel } from './utils/statusWantedModel.js'
import './App.css'

function App() {

    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
    const [vertical, setVertical] = useState(window.innerWidth <= 1000);
    const [statusGamesWanted, setStatusGamesWanted] = useState(() => {
        const storedValue = window.localStorage.getItem("statusGamesWanted");
        return JSON.parse(storedValue) || statusWantedModel
    })

    const updateCartSection = (game, toRemove) => {
        const newStatus = statusGamesWanted.map(el => el.id === game.id ? { ...el, wanted: toRemove } : el)
        localStorage.setItem('statusGamesWanted', JSON.stringify(newStatus))
        setStatusGamesWanted([...newStatus])
    }

    useEffect(() => {
        const handleResizeMobile = () => {
            window.innerWidth <= 858 ? setIsMobile(true) : setIsMobile(false)
            window.innerWidth <= 1000 ? setVertical(true) : setVertical(false)
        };
        window.addEventListener('resize', handleResizeMobile);
        return () => {
            window.removeEventListener('resize', handleResizeMobile);
        }
    }, [])

    return (
        <>
            <Routes>
                <Route path="/gamestore/" element={<HomePage
                    isMobile={isMobile}
                    updateCartSection={updateCartSection}
                    statusGamesWanted={statusGamesWanted} />} />
                <Route path="/gamestore/games/:codename" element={<GamePage
                    isMobile={isMobile}
                    vertical={vertical}
                    updateCartSection={updateCartSection}
                    statusGamesWanted={statusGamesWanted} />} />
                <Route path="/gamestore/search" element={<SearchPage
                    isMobile={isMobile} 
                    updateCartSection={updateCartSection}
                    statusGamesWanted={statusGamesWanted} />} />
                <Route path="/gamestore/*" element={<NotFound />} />
            </Routes>
        </>
    )
}

export default App
