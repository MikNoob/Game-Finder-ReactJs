import React, {useState, useEffect} from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {searchGame} from '../../utils/api'
import {clearSearchQuery} from './action'
import Loading from '../Loading'
import GameCard from './GameCard'
import './style.css'

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
                setPages(pages = {next: data.next, prev: data.previous})

                setApiState(apiState = 'idle')
                dispatch(clearSearchQuery())
            }
            fetchData()
        }

    }, [searchQuery])

    let makeGameCard = game => <GameCard key={game.id} {...game} />

    return(
        <div className='GameList--Container'>
            {apiState === 'fetching' 
            ? <div className='GameList--Loading'> <Loading/> </div>
            : 
            (
            <div className='GameList--List'> 
                {games.map(makeGameCard)}

                {games.length !== 0
                ?
                (
                    <div className='GameList--PagesBtns'>
                        <button disabled={pages.prev !== undefined ? false : true}>Prev.</button>
                        <button disabled={pages.next !== undefined ? false : true}>Next</button>
                    </div>
                )
                : null
                }

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