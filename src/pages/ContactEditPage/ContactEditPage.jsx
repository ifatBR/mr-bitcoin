import { Component } from 'react';
import contactService from '../../services/contactService';
import { Link } from 'react-router-dom';

import './ContactEditPage.scss';

export class ContactEditPage extends Component {
    state = {
        contact: null,
    };
    // contactId = '5a566402abb3146207bc4ec5';
    contactId = null;
    componentDidMount() {
        //Todo: check if there is id in the route
        if (this.props.match.params.id) this.setContact();
        else this.setState({ contact: contactService.getEmptyContact() });
    }

    setContact = async () => {
        this.setState({ contact: await contactService.getContactById(this.props.match.params.id) });
    };

    onHandleChange = ({ target }) => {
        const contact = { ...this.state.contact };
        console.log('contact:');
        contact[target.name] = target.value;
        this.setState({ contact });
    };

    onSaveContact = (ev) => {
        ev.preventDefault();
        contactService.saveContact(this.state.contact);
        this.props.history.push(this.props.match.params.id? '/contact/'+this.props.match.params.id: '/contact/')

    };

    onCloseContact = () => {
        
    };

    render() {
        const { contact } = this.state;
        return (
            contact && (
                <form onSubmit={this.onSaveContact} className="contact-edit">
                      <Link to={this.props.match.params.id? '/contact/'+this.props.match.params.id: '/contact/'} className="btn standard back">
                        ← Back
                    </Link>
                    <label htmlFor="name">
                        Name:
                        <input type="text" value={contact.name} id="name" name="name" onChange={this.onHandleChange} required />
                    </label>
                    <label htmlFor="phone">
                        Phone:
                        <input type="text" id="phone" name="phone" value={contact.phone} onChange={this.onHandleChange} required />
                    </label>
                    <label htmlFor="email">
                        Email:
                        <input type="email" id="email" name="email" value={contact.email} onChange={this.onHandleChange} required />
                    </label>
                    <button className="btn standard">Save</button>
                </form>
            )
        );
    }
}
