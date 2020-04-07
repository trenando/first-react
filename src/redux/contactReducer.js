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
            const newContact = {
                id: Date.now(),
                name: action.values.name,
                email: action.values.email,
                subject: action.values.subject,
                message: action.values.message
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