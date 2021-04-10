import contactService from '../../services/contactService'
import userService from '../../services/userService'
export function loadContacts(filter=null){
    return async dispatch => {
        const contacts = await contactService.getContacts(filter)
        dispatch({type:'SET_CONTACTS', contacts})
    }
}
export function loadContact(id){
    return async dispatch => {
        const contact = await contactService.getContactById(id);
        dispatch({type:'SET_CONTACT', contact})
    }
}
export function removeContact(id){
    return async dispatch => {
        await contactService.deleteContact(id);
        dispatch({type:'REMOVE_CONTACT', id})
        dispatch({type:'SET_CONTACT', contact:null})
    }
}
export function saveContact(contact){
    return async dispatch => {
        const updatedContact = await contactService.saveContact(contact);
        if(contact._id) dispatch({type:'UPDATE_CONTACT', contact:updatedContact})
        else dispatch({type:'ADD_CONTACT', contact:updatedContact})
    }
}

