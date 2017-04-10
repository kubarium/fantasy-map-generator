import * as Actions from '../Actions'

import Pieces from '../components/Pieces'
import { connect } from 'react-redux'

const mapStateToProps = (state, ownProps) => {
    return {
        pieces: state.pieces
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        dispatch1: () => {
            dispatch(actionCreator)
        }
    }
}

const mergeProps = (stateProps, dispatchProps, ownProps) => {
    return {
        mergeProp: mergePropVal
    }
}

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(Pieces)