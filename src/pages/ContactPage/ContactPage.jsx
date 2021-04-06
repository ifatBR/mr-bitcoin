import contactService from '../../services/contactService';
import { Component } from 'react';
import { ContactList } from '../../cmps/ContactList';
import { ContactDetailsPage } from '../ContactDetailsPage';
import { ContactEditPage } from '../ContactEditPage';
import { Route } from 'react-router';
import './ContactPage.scss';

export class ContactPage extends Component {
    state = {
        contacts: null,
    };

    componentDidMount() {
        this.loadContacts();
    }

    loadContacts = async (filter = null) => {
        const contacts = await contactService.getContacts(filter);
        this.setState({ contacts });
    };


    onChangeFilter = (filter) => {
        this.loadContacts(filter);
    };
    render() {
        const { contacts} = this.state;
        return (
            <div>
                <Route component={ContactEditPage} path="/contact/edit/:id?" />
                <Route exact component={ContactDetailsPage} path="/contact/:id" />
                <Route exact component={ContactList} contacts={contacts} path="/contact/" />
               
            </div>
        );
    }
}
