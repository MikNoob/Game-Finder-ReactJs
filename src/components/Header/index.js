import React, {useState} from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {FaSearch} from 'react-icons/fa'
import {setSearchQuery} from './action'
import './style.css'

let Header = ({dispatch}) => {
    let [input, setInput] = useState('')

    let handleInput = e => {
        let {value} = e.target
        setInput(input = value)
    }

    let handleSubmit = e => {
        if(e.key === 'Enter' || e.type === 'click')
            if(input.length >= 2) {
                dispatch(setSearchQuery(input))
                setInput(input = '')
            }
    }

    return(
        <div className='Header--Container'>
            <div className='Header--SearchBox'>
                <input
                    placeholder={'Search for games'}
                    value={input}
                    onChange={handleInput}
                    onKeyPress={handleSubmit}
                />
                <FaSearch size={23} onClick={handleSubmit}/>
            </div>
        </div>
    )
}

Header.propTypes = {
    dispatch: PropTypes.func.isRequired
}

export default connect()(Header)