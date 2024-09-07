import React from 'react'
import './Sidebar.css'

export const Sidebar = () => {

    return (
        <div>
            <aside className='sidebar'>
                <div>
                    <span className='sidebarHeading'>Platforms</span>
                    <ul className='sidebarList'>
                        <li>
                            <div className='icon'><img src='/images/Windows.png' /></div>
                            <span>Windows</span></li>
                        <li>
                            <div className='icon'><img src='/images/macOS.png' /></div>
                            <span>macOS</span></li>
                        <li>
                            <div className='icon'><img src='/images/Linux.png' /></div>
                            <span>Linux</span></li>
                        <li>
                            <div className='icon'><img src='/images/PlayStation.png' /></div>
                            <span>PlayStation</span></li>
                        <li>
                            <div className='icon'><img src='/images/Xbox.png' /></div>
                            <span>Xbox</span></li>
                        <li>
                            <div className='icon'><img src='/images/Nintendo.png' /></div>
                            <span>Nintendo</span></li>
                    </ul>
                </div>
                <div>
                    <span className='sidebarHeading'>Order By</span>
                    <ul className='sidebarList'>
                        <li>
                            <div className='icon'><img src='/images/star.png' /></div>
                            <span>Score</span></li>
                        <li>
                            <div className='icon'><img src='/images/calendar.png' /></div>
                            <span>Release Date</span></li>
                        <li>
                            <div className='icon'><img src='/images/tag.png' /></div>
                            <span>Price</span></li>
                    </ul>
                </div>
            </aside>
        </div>
    )
}
