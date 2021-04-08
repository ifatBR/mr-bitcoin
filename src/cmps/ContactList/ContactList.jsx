import './ContactList.scss';
import contactService from '../../services/contactService';

import { Component } from 'react';

import { ContactPreview } from '../ContactPreview';
import { ContactFilter } from '../ContactFilter';
import {Link} from 'react-router-dom'
export class ContactList extends Component {
    state = {
        contacts: null,
    };

    componentDidMount() {
        this.loadContacts();
    }

    loadContacts = async (filter = null) => {
        try{
            const contacts = await contactService.getContacts(filter);
            this.setState({ contacts });
        }catch(err){
            this.props.setErrMsg('Could not load contact details')
        }
    };

    onChangeFilter = (filter) => {
        this.loadContacts(filter);
    };
    render() {
        const { contacts } = this.state;
        return (
            contacts && (
                <div className="contact-list-container">
                    <div className="contact-ctrls">
                        <Link to="/contact/edit" className="btn standard">Add contact</Link>
                        <ContactFilter onChangeFilter={this.onChangeFilter} key={0} />
                    </div>
                    <div className="contact-list">
                        {contacts.map((contact) => (
                            <ContactPreview contact={contact} key={contact._id} />
                        ))}
                    </div>
                </div>
            )
        );
    }
}
