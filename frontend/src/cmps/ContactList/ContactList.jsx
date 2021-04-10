import './ContactList.scss';
import { ContactPreview } from '../ContactPreview';
import { ContactFilter } from '../ContactFilter';
import { Link } from 'react-router-dom';
export function ContactList({ contacts, onChangeFilter }) {
    if(!contacts) return(
        <img className="loader" src="https://i.pinimg.com/originals/b3/30/0a/b3300a501c0897d36683d6f6d0b000a5.gif" alt="Loading"></img>
    )
    return (
        contacts && (
            <div className="contact-list-container">
                <div className="contact-ctrls">
                    <Link to="/contact/edit" className="btn standard">
                        Add contact
                    </Link>
                    <ContactFilter onChangeFilter={onChangeFilter} />
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
