const ADD_TRIAL = 'ADD_TRIAL'

const initialState = {
    trialItems: [
        {
            id: 0,
            name: '',
            email: '',
            password: ''
        }
    ]
}

export function homeReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_TRIAL:
            const { name, email, password } = action.values
            const newTrial = {
                id: Date.now(),
                name: name,
                email: email,
                password: password
            }
            return {
                ...state,
                trialItems: [...state.trialItems, newTrial]
            }
        default:
            return state

    }
}

export const addTrialAC = (values) => {
    return (
        {
            type: ADD_TRIAL,
            values: values
        }
    )
}