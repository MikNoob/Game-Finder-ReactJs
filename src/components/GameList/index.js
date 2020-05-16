import React, {useState, useEffect} from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import Loading from '../Loading'
import {searchGame} from '../../utils/api'
import {clearSearchQuery} from './action'
import './style.css'

let GameList = ({searchQuery, dispatch}) => {
    let [apiState, setApiState] = useState('idle')
    let [games, setGames] = useState([])
    let [pages, setPages] = useState({})

    useEffect(() => {
        if(searchQuery !== '') {
            setApiState(apiState = 'fetching')

            let fetchData = async () => {
                let data = await searchGame(searchQuery)

                setGames(games = await data.games)
                setPages(pages = {next: data.next, prev: data.previous})

                setApiState(apiState = 'idle')
                dispatch(clearSearchQuery())
            }
            fetchData()
        }

    }, [searchQuery])

    let makeGameCard = game => <p>{game.name}</p>

    return(
        <div className='GameList--Container'>
            {apiState === 'fetching' 
            ? <div className='GameList--Loading'> <Loading/> </div>
            : <div>{games.map(makeGameCard)}</div>
            }
        </div>
    )
}

GameList.propTypes = {
    dispatch: PropTypes.func.isRequired,
    searchQuery: PropTypes.string.isRequired
}

export default connect(state => ({searchQuery: state.searchQuery}))(GameList)