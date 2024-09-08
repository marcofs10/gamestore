import React from 'react'
import './Sidebar.css'

export const Sidebar = ({ filterByPlatform, orderBy }) => {

    return (
        <div>
            <aside className='sidebar'>
                <div>
                    <span className='sidebarHeading'>Platforms</span>
                    <ul className='sidebarList'>
                        <li onClick={() => filterByPlatform("Windows")}>
                            <div className='icon'><img src='/images/Windows.png' /></div>
                            <span>Windows</span></li>
                        <li onClick={() => filterByPlatform("macOS")}>
                            <div className='icon'><img src='/images/macOS.png' /></div>
                            <span>macOS</span></li>
                        <li onClick={() => filterByPlatform("Linux")}>
                            <div className='icon'><img src='/images/Linux.png' /></div>
                            <span>Linux</span></li>
                        <li onClick={() => filterByPlatform("PlayStation")}>
                            <div className='icon'><img src='/images/PlayStation.png' /></div>
                            <span>PlayStation</span></li>
                        <li onClick={() => filterByPlatform("Xbox")}>
                            <div className='icon'><img src='/images/Xbox.png' /></div>
                            <span>Xbox</span></li>
                        <li onClick={() => filterByPlatform("Nintendo")}>
                            <div className='icon'><img src='/images/Nintendo.png' /></div>
                            <span>Nintendo</span></li>
                    </ul>
                </div>
                <div>
                    <span className='sidebarHeading'>Order By</span>
                    <ul className='sidebarList'>
                        <li onClick={() => orderBy("rating", "Score")}>
                            <div className='icon'><img src='/images/star.png' /></div>
                            <span>Score</span></li>
                        <li onClick={() => orderBy("releaseFormat", "Release Date")}>
                            <div className='icon'><img src='/images/calendar.png' /></div>
                            <span>Release Date</span></li>
                        <li onClick={() => orderBy("price", "Price")}>
                            <div className='icon'><img src='/images/tag.png' /></div>
                            <span>Price</span></li>
                    </ul>
                </div>
            </aside>
        </div>
    )
}
