import { addContactAC } from '../../redux/contactReducer'
import { connect } from 'react-redux'
import { Contact } from './Contact'

const mapStateToProps = (state) => {
    return {

    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addContact: (values) => {
            dispatch(addContactAC(values))
        }
    }
}

export const ContactContainer = connect(mapStateToProps, mapDispatchToProps)(Contact)