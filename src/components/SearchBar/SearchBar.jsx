import React, { useState, useEffect, useRef } from 'react'
import { useNavigate, createSearchParams } from 'react-router-dom'
import { games } from '../../utils/games.js'
import { Suggestion } from '../Suggestion/Suggestion.jsx'
import search from '/images/search.webp'
import './SearchBar.css'

export const SearchBar = () => {

    const [backUpText, setBackUpText] = useState('');
    const [text, setText] = useState('');
    const [suggestions, setSuggestions] = useState([]);
    const [selectedItem, setSelectedItem] = useState(-1);
    const [open, setOpen] = useState(false);
    const [trigger, setTrigger] = useState(false);
    const navigate = useNavigate();
    const searchRef = useRef();

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    const handleKeyDown = (e) => {
        if (text === '') return;
        if (e.key === 'ArrowUp') {
            e.preventDefault();
            if (selectedItem === 0) {
                setSelectedItem(-1)
                setText(backUpText)
            } else {
                setSelectedItem(selectedItem > 0 ? selectedItem - 1 : suggestions.length - 1)
                setText(suggestions[selectedItem > 0 ? selectedItem - 1 : suggestions.length - 1].name)
            }
        } else if (e.key === 'ArrowDown') {
            if (selectedItem === suggestions.length - 1) {
                setSelectedItem(-1)
                setText(backUpText)
            } else {
                setSelectedItem(selectedItem + 1)
                setText(suggestions[selectedItem + 1].name)
            }
            return;
        }
        if (e.key === 'Enter') {
            const gameSelected = games.find(el => el.name === text);
            setOpen(false);
            if (gameSelected) {
                navigate(`/gamestore/games/${gameSelected.codename}`);
            } else {
                navigate({
                    pathname: "/gamestore/search",
                    search: createSearchParams({
                        q: text
                    }).toString()
                });
            }
            return;
        }
        if (e.key === 'Escape') {
            setOpen(false)
        }
    }

    const handleChangeText = (e) => {
        setBackUpText(e.target.value)
        setText(e.target.value)
        setTrigger(!trigger)
    }

    const handleOpen = () => {
        setOpen(true)
    }

    const handleButtonSearch = () => {
        if (text !== '') {
            setText('')
            setOpen(false)
            setSelectedItem(-1)
        }
    }

    useEffect(() => {
        const newSuggestions = games.filter(game => game.name.toLowerCase().includes(text.toLowerCase()))
        setSuggestions(newSuggestions)
        if (text === '') setSelectedItem(-1)
    }, [trigger])

    useEffect(() => {
        const onClickOutside = (e) => {
            if (!searchRef.current.contains(e.target)) {
                setOpen(false)
            }
        }
        document.addEventListener("mousedown", onClickOutside);
        return () => document.removeEventListener("mousedown", onClickOutside);
    })

    return (
        <div className="searchContainer" ref={searchRef}>
            <form onSubmit={handleSubmit}>
                <input placeholder="Search games"
                    spellCheck="false"
                    value={text}
                    onChange={handleChangeText} 
                    onKeyDown={handleKeyDown}
                    onClick={handleOpen} />
                <button onClick={handleButtonSearch}>
                    {text !== '' ? <span>✖</span> :
                        <img src={search} aria-label='Search' />}
                </button>
            </form>
            <div className='suggestions'>
                {text != '' && open &&
                    suggestions.map((suggestion, index) =>
                        <Suggestion key={index}
                            index={index}
                            selected={selectedItem === index}
                            suggestion={suggestion}
                            setSelectedItem={setSelectedItem} />)
                }
            </div>
        </div>
    )
}
