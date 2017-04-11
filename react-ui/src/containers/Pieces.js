import * as Actions from '../Actions'

import Pieces from '../components/Pieces'
import { connect } from 'react-redux'

const mapStateToProps = (state, ownProps) => {    
    return {
        pieces: state.pieces.filter((piece,index)=>index<10)
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        loadPieces: () => {           
            dispatch(Actions.pieces())
        },
        addLayer: (layer) => {
            console.log(layer)
            //dispatch(Actions.addLayer(layer))
        }
    }
}

/*const mergeProps = (stateProps, dispatchProps, ownProps) => {
    return {
        mergeProp: mergePropVal
    }
}*/

export default connect(mapStateToProps, mapDispatchToProps)(Pieces)
