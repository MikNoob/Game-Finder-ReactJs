import React, {useState} from 'react'
import {FaSearch} from 'react-icons/fa'
import './style.css'

let Header = () => {
    let [input, setInput] = useState('')

    let handleInput = e => {
        let {value} = e.target
        setInput(input = value)
    }

    let handleSubmit = e => {
        if(e.key === 'Enter' || e.type === 'click')
            if(input.length >= 2)
                console.log(`Searching for ${input}`)
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

export default Header