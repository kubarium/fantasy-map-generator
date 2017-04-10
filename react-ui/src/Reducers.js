import * as Actions from './Actions'

const ReducersInitialState = {}
export const Reducers = (state = ReducersInitialState, action) => {
    switch (action.type) {
        case Actions.PIECES_SUCCESS:
            return {
                ...state,
                pieces:action.pieces
            }
        case Actions.PIECES_FAILURE:
            throw new Error(action.error)
        default:
            return state
    }
}