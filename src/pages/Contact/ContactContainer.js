import { addContactAC } from '../../redux/contactReducer'
import { connect } from 'react-redux'
import { Contact } from './Contact'

const mapDispatchToProps = (dispatch) => {
    return {
        addContact: (values) => {
            dispatch(addContactAC(values))
        }
    }
}

export const ContactContainer = connect(null, mapDispatchToProps)(Contact)