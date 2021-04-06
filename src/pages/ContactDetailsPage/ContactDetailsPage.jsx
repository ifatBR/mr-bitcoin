import { Component } from 'react';
import contactService from '../../services/contactService';
import { Msg } from '../../cmps/Msg';
import { Link } from 'react-router-dom';

import './ContactDetailsPage.scss';

export class ContactDetailsPage extends Component {
    state = {
        contact: null,
        isShowMsg: false,
    };

    async componentDidMount() {
        const contact = await contactService.getContactById(this.props.match.params.id);
        this.setState({ contact });
    }
    onShowMsg = () => {
        this.setState({ isShowMsg: true });
    };
    onHideMsg = () => {
        this.setState({ isShowMsg: false });
    };
    onRemoveContact = () => {
        contactService.deleteContact(this.state.contact._id);
        this.props.history.push('/contact');
        this.onHideMsg();
    };
    render() {
        const { contact, isShowMsg } = this.state;
        return (
            contact && (
                <div className="contact-detail-page">
                    <button onClick={() => this.props.history.goBack()} className="btn standard back">
                        ← Back
                    </button>
                    <div className="contact-info">
                        <img src={`https://i.pravatar.cc/150?u=${contact._id}`} alt="" />
                        <h2>{contact.name}</h2>
                        <h3>{contact.phone}</h3>
                        <h3>{contact.email}</h3>
                    </div>
                    <div className="btn-container">
                        {/* TODO: Add confirmation popup for deleting! */}
                        <button onClick={this.onShowMsg} className="btn alert">
                            Delete
                        </button>
                        <Link to={'/contact/edit/' + contact._id} className="btn standard">
                            Edit
                        </Link>
                    </div>
                    {isShowMsg && (
                        <Msg onHideMsg={this.onHideMsg}>
                            <p>Are you sure you want to delete this contact?</p>
                            <button className="btn standard" onClick={this.onRemoveContact}>
                                Yes
                            </button>
                            <button onClick={this.onHideMsg} className="btn alert">
                                No
                            </button>
                        </Msg>
                    )}
                </div>
            )
        );
    }
}
