import contactService from '../../services/contactService';
import { Component } from 'react';
import { ContactList } from '../../cmps/ContactList';
import { ContactDetailsPage } from '../ContactDetailsPage';
import { ContactEditPage } from '../ContactEditPage';
import { Route } from 'react-router';
import { NavLink } from 'react-router-dom';
import './ContactPage.scss';

export class ContactPage extends Component {
    state = {
        contacts: null,
        // selectedContactId: null,
    };

    componentDidMount() {
        this.loadContacts();
    }

    loadContacts = async (filter = null) => {
        const contacts = await contactService.getContacts(filter);
        this.setState({ contacts });
    };

    // onSelectContact = (contactId) => {
    //     console.log('selected');
    //     this.setState({ selectedContactId: contactId });
    //     this.onChangeFilter(null);
    // };
    // onCloseContact = () => {
    //     this.setState({ selectedContactId: null });
    // };

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
                {/* <ContactList onSelectContact={this.onSelectContact} onChangeFilter={this.onChangeFilter} openContactEdit={this.props.openContactEdit}key={1} contacts={contacts} />, */}

                {/* {contacts &&
                    !selectedContactId && [
                        <ContactList onSelectContact={this.onSelectContact} onChangeFilter={this.onChangeFilter} openContactEdit={this.props.openContactEdit}key={1} contacts={contacts} />,
                    ]}
                {selectedContactId && <ContactDetailsPage onCloseContact={this.onCloseContact} selectedContactId={selectedContactId} />} */}
            </div>
        );
    }
}
