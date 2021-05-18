import { Component } from 'react';
import contactService from '../../services/contactService';
import './ContactEditPage.scss';
import { connect } from 'react-redux';
import { loadContact, saveContact } from '../../store/actions/contactActions';
export class _ContactEditPage extends Component {
    state = {
        contact: null,
    };
    
    componentDidMount() {
        if (this.props.match.params.id) this.setContact(this.props.match.params.id);
        else this.setState({ contact: contactService.getEmptyContact() });
    }

    setContact = async (id) => {
        try {
            await this.props.loadContact(id);
            const contact = { ...this.props.contact };
            this.setState({ contact });
        } catch (err) {
            this.props.setErrMsg('Could not load contact details');
        }
    };

    onHandleChange = ({ target }) => {
        const field = target.name;
        const value = target.value;
        this.setState({ contact: { ...this.state.contact, [field]: value } });
    };

    onSaveContact = (ev) => {
        ev.preventDefault();
        this.props.saveContact(this.state.contact);
        this.props.history.push(this.props.match.params.id ? '/contact/details/' + this.props.match.params.id : '/contact/');
    };

    render() {
        const { contact } = this.state;
        return (
            contact && (
                <form onSubmit={this.onSaveContact} className="contact-edit">
                    <button onClick={() => this.props.history.goBack()} className="btn standard back">
                        ← Back
                    </button>
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

const mapStateToProps = (state) => {
    return {
        contact: state.contactReducer.contact,
    };
};

const mapDispatchToProps = {
    loadContact,
    saveContact,
};

export const ContactEditPage = connect(mapStateToProps, mapDispatchToProps)(_ContactEditPage);
