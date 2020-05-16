import React from 'react'
import {Provider} from 'react-redux'
import store from './redux/store'
import './Global.css'

import Header from './components/Header'
import GameList from './components/GameList'

let App = () => (
    <div className='App'>
        <Provider store={store}>
            <Header />
            <GameList />
        </Provider>
    </div>
)

export default App