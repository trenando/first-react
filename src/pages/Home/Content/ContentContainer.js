import { addTrialAC } from '../../../redux/homeReducer'
import { Content } from './Content'
import { connect } from 'react-redux'

const mapStateToProps = (state) => {
    return {

    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addTrial: (values) => {
            dispatch(addTrialAC(values))
        }
    }
}

export const ContentContainer = connect(mapStateToProps, mapDispatchToProps)(Content)