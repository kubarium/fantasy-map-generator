export const PIECES = "pieces"
export const PIECES_SUCCESS = "piecesSuccess"
export const PIECES_FAILURE = "piecesFailure"

import axios from 'axios'

export function pieces(){
    axios.get("/api/pieces").then(piecesSuccess).catch(piecesFailure)
}

export function piecesSuccess(data){
    return {type:PIECES_SUCCESS, data}    
}

export function piecesFailure(error){
    return {type:PIECES_FAILURE, error}
}