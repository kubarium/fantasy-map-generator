import * as Actions from './Actions'

const reducers = (state, action) => {
    switch (action.type) {
        case Actions.PIECES_SUCCESS:            
            return {
                ...state,
                pieces:action.pieces
            }
        case Actions.PIECES_FAILURE:
            throw new Error(action.error)
        case Actions.SELECT_TILE:
            const tiles = state.tiles.slice()
            const tile = tiles.filter(tile=>tile.id===action.id)[0]
            const tileIndex = tiles.findIndex(tile=>tile.id===action.id)
            
            tile.selected = !tile.selected
            
            tiles.splice(tileIndex, 1, tile)
            
            return {
                ...state,
                tiles
            }
        case Actions.ADD_LAYER:
            const selectedTiles = state.tiles.filter(tile => tile.selected)
            
            selectedTiles.forEach((tile, index, array) => {
                tile.layers.unshift(action.layer)
            })
            return {
                ...state,
                selectedTiles
            }
        default:
            return state
    }
}

export default reducers