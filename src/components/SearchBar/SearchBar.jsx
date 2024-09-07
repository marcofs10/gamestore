import React, { useState } from 'react'
import search from '/images/search.webp'
import './SearchBar.css'

export const SearchBar = () => {

    const [text, setText] = useState('');

    const handleChangeText = (e) => {
        setText(e.target.value)
    }

    return (
        <div className="searchContainer">
            <form>
                <input placeholder="Search games"
                    spellCheck="false"
                    value={text}
                    onChange={handleChangeText}/>
                <button>
                    <img src={search} aria-label='Search' />
                </button>
            </form>
        </div>
    )
}
