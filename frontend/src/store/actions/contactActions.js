import contactService from '../../services/contactService';
export function loadContacts(filter = null) {
    return async (dispatch) => {
        const contacts = await contactService.getContacts(filter);
        dispatch({ type: 'SET_CONTACTS', contacts });
    };
}
export function loadContact(id) {
    return async (dispatch, getState) => {
        const contact = await contactService.getContactById(id);
        const contacts = getState().contactReducer.contacts;
        const idx = contacts.findIndex(({ _id }) => _id === contact._id);
        let prevIdx = idx - 1;
        let nextIdx = idx + 1;
        if (prevIdx < 0) prevIdx = contacts.length - 1;
        if (nextIdx > contacts.length - 1) nextIdx = 0;
        contact.prevContact = contacts[prevIdx]._id;
        contact.nextContact = contacts[nextIdx]._id;
        dispatch({ type: 'SET_CONTACT', contact });
    };
}
export function removeContact(id) {
    return async (dispatch) => {
        await contactService.deleteContact(id);
        dispatch({ type: 'REMOVE_CONTACT', id });
        dispatch({ type: 'SET_CONTACT', contact: null });
    };
}
export function saveContact(contact) {
    return async (dispatch) => {
        const savedContact = await contactService.saveContact(contact);
        if (contact._id) {
            dispatch({ type: 'UPDATE_CONTACT', contact: savedContact });
            dispatch({ type: 'SET_CONTACT', contact: savedContact });
        } else dispatch({ type: 'ADD_CONTACT', contact: savedContact });
    };
}
// export function getNextPrevContact(diff){
//     return async (dispatch, getState) => {
//         const contacts= getState().contactReducer.contacts
//         const contact= getState().contactReducer.contact

//         const contactIdx = contacts.findIndex(({_id}) => _id===contact._id)
//         let idx = contactIdx + diff;
//         if(idx>=contacts.length) idx = 0;
//         else if(idx<=0) idx = contacts.length-1;

//         return contacts[idx]._id
//     }
// }
