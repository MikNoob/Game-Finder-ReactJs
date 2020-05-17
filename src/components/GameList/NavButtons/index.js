import React from 'react'
import PropTypes from 'prop-types'

import './style.css'

let NavButtons = ({changePageFunc, next, prev}) => {
    console.log(`Prev. Url: ${prev}`)
    console.log(`Next Url: ${next}`)
    return(
        <div className='NavButtons--Container'>
            <button 
                disabled={prev !== null ? false : true}
                onClick={() => changePageFunc(prev)}
            > Prev.</button>

            <button
                disabled={next !== null ? false : true}
                onClick={() => changePageFunc(next)}
            > Next</button>
        </div>
    )
}

NavButtons.propTypes = {
    changePageFunc: PropTypes.func.isRequired,
    next: PropTypes.string,
    prev: PropTypes.string
}

export default NavButtons