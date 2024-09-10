import React from 'react'
import './Suggestion.css'
import { NavLink } from 'react-router-dom'

export const Suggestion = ({suggestion,selected,index,setSelectedItem}) => {

    return (
        <NavLink
            to={`/game-ecommerce/games/${suggestion.id}`}
            onMouseEnter={()=>setSelectedItem(index)}
            className={`suggestion ${selected ? 'selected' : ''}`}>{suggestion.name}
        </NavLink>
    )
}