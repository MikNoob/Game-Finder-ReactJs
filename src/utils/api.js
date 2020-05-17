let baseUrl = 'https://api.rawg.io/api'

let makeGameObj = game => {
    let {id, name, background_image} = game
    return {
        id,
        name,
        background_image
    }
}

let searchGame = async (gameName) => {
    let url = `${baseUrl}/games?search=${gameName}`
    let resp = await fetch(url)
    let data = await resp.json()
    let games = await data.results.map(makeGameObj)
    return {
        next: data.next,
        prev: data.previous,
        games
    }
}

let getGamePage = async url => {
    let resp = await fetch(url)
    let data = await resp.json()
    let games = await data.results.map(makeGameObj)
    return {
        next: data.next,
        prev: data.previous,
        games
    }
}

export {searchGame, getGamePage}