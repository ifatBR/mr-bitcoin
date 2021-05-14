import './ContactFilter.scss';

export function ContactFilter({ onChangeFilter }) {
    const handleChange = ({ target }) => {
        onChangeFilter({ term: target.value });
    };
    return (
        <form className="contact-filter">
            <label htmlFor="filter">Filter contacts</label>
            <input type="text" id="filter" onChange={handleChange} placeholder="Search..." />
        </form>
    );
}
