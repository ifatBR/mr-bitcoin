import { Component } from 'react';

import './ContactFilter.scss';

export class ContactFilter extends Component {
    state = {
        term: null,
    };

    handleChange = ({ target }) => {
        this.setState({ term: target.value }, () => {
            this.props.onChangeFilter({ ...this.state });
        });
    };

    render() {
        return (
            <form className="contact-filter" onSubmit={(ev) => ev.preventDefault()}>
                <label htmlFor="filter">Filter contacts</label>
                <input type="text" id="filter" onChange={this.handleChange} placeholder="Search..."/>
            </form>
        );
    }
}
