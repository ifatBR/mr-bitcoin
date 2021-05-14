import { httpService } from './httpService';
export default {
    getContacts,
    getContactById,
    deleteContact,
    saveContact,
    getEmptyContact,
};


async function getContacts(filterBy = null) {
    var queryStr = !filterBy ? '' : `?term=${filterBy.term}`;
    const contacts = await httpService.get(`contact${queryStr}`);
    return contacts;
}

async function getContactById(id) {
  const contact= await httpService.get(`contact/${id}`);
  return contact;
}

async function deleteContact(id) {
  const contact= await httpService.delete(`contact/${id}`);
  return contact;
}

function saveContact(contact) {
    return contact._id ? _updateContact(contact) : _addContact(contact);
}

function getEmptyContact() {
    return {
        name: '',
        email: '',
        phone: '',
    };
}

async function _updateContact(contact) {
    const savedContact= await httpService.put(`contact/${contact._id}`, contact);
    return savedContact;
}

async function _addContact(contact) {
    const savedContact= await httpService.post(`contact/`,contact);
    return savedContact;
}


