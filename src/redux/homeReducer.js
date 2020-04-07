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
            const newTrial = {
                id: Date.now(),
                name: action.values.name,
                email: action.values.email,
                password: action.values.password
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