import { Component } from 'react';
import contactService from '../../services/contactService';
import './ContactEditPage.scss';

export class ContactEditPage extends Component {
    state = {
        contact: null,
    };
    componentDidMount() {
        if (this.props.match.params.id) this.setContact();
        else this.setState({ contact: contactService.getEmptyContact() });
    }

    setContact = async () => {
        this.setState({ contact: await contactService.getContactById(this.props.match.params.id) });
    };

    onHandleChange = ({ target }) => {
        const field=target.name;
        const value = target.value;
        this.setState({ contact:{...this.state.contact, [field]:value} });
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
                      <button onClick={()=>this.props.history.goBack()} className="btn standard back">
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
