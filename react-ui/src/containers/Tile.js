import * as Actions from '../Actions'

import Tile from '../components/Tile'
import { connect } from 'react-redux'

const mapStateToProps = (state, ownProps) => {
    return {
        prop: state.prop
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        selectTile: (id) => {
            dispatch(Actions.selectTile(id))
        }
    }
}

/*const mergeProps = (stateProps, dispatchProps, ownProps) => {
    return {
        mergeProp: mergePropVal
    }
}*/

export default connect(mapStateToProps, mapDispatchToProps)(Tile)