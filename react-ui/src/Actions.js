export const PIECES = "pieces"
export const PIECES_SUCCESS = "piecesSuccess"
export const PIECES_FAILURE = "piecesFailure"
export const SELECT_TILE = "selectTile"

import axios from 'axios'

export function pieces() {
    return function (dispatch) {        
        axios
            .get('/api/pieces')
            .then(result => dispatch(piecesSuccess(result.data)))
            .catch(error => dispatch(piecesFailure(error)))
    }
}

export function piecesSuccess(data) {        
    return {type:PIECES_SUCCESS, pieces:data.pieces}    
}

export function piecesFailure(error){
    return {type:PIECES_FAILURE, error}
}
export function selectTile(id){
    return {type:SELECT_TILE, id}
}