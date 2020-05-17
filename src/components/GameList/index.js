import React, {useState, useEffect} from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {searchGame, getGamePage} from '../../utils/api'
import {clearSearchQuery} from './action'
import './style.css'

import Loading from '../Loading'
import GameCard from './GameCard'
import NavButtons from './NavButtons'

let GameList = ({searchQuery, dispatch}) => {
    let [apiState, setApiState] = useState('idle')
    let [games, setGames] = useState([])
    let [pages, setPages] = useState({})

    useEffect(() => {
        if(searchQuery !== '') {
            // eslint-disable-next-line
            setApiState(apiState = 'fetching')

            let fetchData = async () => {
                let data = await searchGame(searchQuery)

                // eslint-disable-next-line
                setGames(games = await data.games)
                // eslint-disable-next-line
                setPages(pages = {next: data.next, prev: data.prev})

                setApiState(apiState = 'idle')
                dispatch(clearSearchQuery())
            }
            fetchData()
        }

    }, [searchQuery])

    let changePage = async url => {
        setApiState(apiState = 'fetching')

        let data = await getGamePage(url)
        setGames(games = await data.games)
        setPages(pages = {next: data.next, prev: data.prev})

        setApiState(apiState = 'idle')
    }

    let makeGameCard = game => <GameCard key={game.id} {...game} />

    return(
        <div className='GameList--Container'>
            {apiState === 'fetching' 
            ? <div className='GameList--Loading'> <Loading/> </div>
            : 
            (
            <div>
                <div className='GameList--List'> 
                    {games.map(makeGameCard)}
                </div>

                <div>
                    {games.length !== 0
                    ? <NavButtons changePageFunc={changePage} {...pages}/>
                    : null
                    }
                </div>
            </div>
            )
            }
        </div>
    )
}

GameList.propTypes = {
    dispatch: PropTypes.func.isRequired,
    searchQuery: PropTypes.string.isRequired
}

export default connect(state => ({searchQuery: state.searchQuery}))(GameList)