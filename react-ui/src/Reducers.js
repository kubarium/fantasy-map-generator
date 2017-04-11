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
            return {
                ...state,
                selectedTile:action.id
            }
            throw new Error(action.error)
        default:
            return state
    }
}

export default reducers