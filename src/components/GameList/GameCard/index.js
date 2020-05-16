import React from 'react'
import PropTypes from 'prop-types'
import './style.css'

let GameCard = ({name, background_image}) => {
    return(
        <div className='GameCard--Container'>
            <img src={background_image} alt=''/>
            <span>{name}</span>
        </div>
    )
}

GameCard.propTypes = {
    name: PropTypes.string.isRequired,
    background_image: PropTypes.string.isRequired
}

export default GameCard