const INITIAL_STATE = {
    contacts: null,
    contact: null,
};

export function contactReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'SET_CONTACTS':
            return {
                ...state,
                contacts: action.contacts,
            };
        case 'SET_CONTACT':
            return {
                ...state,
                contact: action.contact,
            };
        case 'REMOVE_CONTACT':
            return {
                ...state,
                contacts: state.contacts.filter(({ _id }) => _id !== action.id),
            };
        case 'UPDATE_CONTACT':
            return {
                ...state,
                contacts: state.contacts.map((contact) => (contact._id === action.contact._id ? action.contact : contact)),
            };
        case 'ADD_CONTACT':
            return {
                ...state,
                contacts: [...state.contacts, action.contact],
            };
        default: {
            return state;
        }
    }
}
