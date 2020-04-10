import { addContactAC, contactReducer } from './contactReducer';

test('length of the new contact should be increased', () => {
    const state = {
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
    const action = addContactAC({
        name: "kolya",
        email: "test@test.com",
        subject: "subjectNew",
        message: "smth"
    })
    const newContactReducer = contactReducer(state, action)
    expect(newContactReducer.contactItems.length).toBe(2)
});