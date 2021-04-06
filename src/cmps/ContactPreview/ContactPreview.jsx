import './ContactPreview.scss';
import {Link} from 'react-router-dom'
export function ContactPreview({ contact, onSelectContact }) {
    return (
        <Link to={'/contact/'+contact._id} className="contact-preview" >
            <img src={`https://i.pravatar.cc/150?u=${contact._id}`} alt="" />
            <h2 >{contact.name}</h2>
        </Link>
    );
}
