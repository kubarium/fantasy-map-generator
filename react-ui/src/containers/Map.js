import * as Actions from '../Actions'

import Map from '../components/Map'
import { connect } from 'react-redux'

const mapStateToProps = (state, ownProps) => {
    return {
        tiles: state.tiles,
        selectedTile:state.selectedTile
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        dispatch1: () => {
            //dispatch(actionCreator)
        }
    }
}
/*
const mergeProps = (stateProps, dispatchProps, ownProps) => {
    return {
        mergeProp: mergePropVal
    }
}*/

export default connect(mapStateToProps, mapDispatchToProps)(Map)