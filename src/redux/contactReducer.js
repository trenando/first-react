const ADD_CONTACT = 'ADD_CONTACT'

const initialState = {
    contactItems: [
        {
            id: 0,
            name: '',
            email: '',
            subject: '',
            message: ''
        }
    ]
}

export function contactReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_CONTACT:
            const {name, email, subject, message} = action.values;
            const newContact = {
                id: Date.now(),
                name: name,
                email: email,
                subject: subject,
                message: message
            }
            return {
                ...state,
                contactItems: [...state.contactItems, newContact]
            }
        default:
            return state
    }

}

export const addContactAC = (values) => {
    return (
        {
            type: ADD_CONTACT,
            values: values
        }
    )
}