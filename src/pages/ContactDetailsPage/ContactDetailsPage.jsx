import { Component } from 'react';
import contactService from '../../services/contactService';
import { Link } from 'react-router-dom';

import './ContactDetailsPage.scss';

export class ContactDetailsPage extends Component {
    state = {
        contact: null,
    };

    async componentDidMount() {
        const contact = await contactService.getContactById(this.props.match.params.id);
        this.setState({ contact });
    }

    onRemoveContact = () => {
        contactService.deleteContact(this.state.contact._id);
        this.props.history.push('/contact')
    };

    render() {
        const { contact } = this.state;
        return (
            contact && (
                <div className="contact-detail-page">
                    <Link to="/contact" className="btn standard back">
                        ← Back
                    </Link>
                    <div className="contact-info">
                        <img src={`https://i.pravatar.cc/150?u=${contact._id}`} alt="" />
                        <h2>{contact.name}</h2>
                        <h3>{contact.phone}</h3>
                        <h3>{contact.email}</h3>
                    </div>
                    <div className="btn-container">

                    <button onClick={this.onRemoveContact} className="btn alert">
                        Delete
                    </button>
                    <Link to={'/contact/edit/'+contact._id} className="btn standard">Edit</Link>   
                </div>
                    </div>
            )
        );
    }
}
