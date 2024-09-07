import { useEffect, useState } from 'react'
import { Routes, Route } from "react-router-dom";
import { HomePage } from './pages/HomePage/HomePage.jsx';

import './App.css'

function App() {
   
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    useEffect(() => {
        const handleResizeMobile = () => {
            window.innerWidth <= 858 ? setIsMobile(true) : setIsMobile(false)
        };
        window.addEventListener('resize', handleResizeMobile);
        return () => {
            window.removeEventListener('resize', handleResizeMobile);
        }
    }, [])

    return (
        <>
            <Routes>
                <Route path="/gamestore/" element={<HomePage isMobile={isMobile}/>} />
            </Routes>
        </>
    )
}

export default App
