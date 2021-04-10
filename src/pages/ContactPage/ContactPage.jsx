import { Component } from 'react';
import { ContactList } from '../../cmps/ContactList';
import { ContactDetailsPage } from '../ContactDetailsPage';
import { ContactEditPage } from '../ContactEditPage';
import { Route } from 'react-router';
import './ContactPage.scss';
import { connect } from 'react-redux';
import { loadContacts } from '../../store/actions/contactActions';
export class _ContactPage extends Component {
    state = {
        errMsg: null,
    };
    componentDidMount() {
        this.props.loadContacts();
    }

    onChangeFilter = (filter) => {
        this.props.loadContacts(filter);
    };

    setErrMsg = (errMsg) => {
        this.setState({ errMsg });
        setTimeout(this.setState({ errMsg: null }), 1000);
    };

    render() {
        const { errMsg } = this.state;
        const { contacts } = this.props;
        return (
            <div>
                <Route component={ContactEditPage} setErrMsg={this.setErrMsg} path="/contact/edit/:id?" />
                <Route exact component={ContactDetailsPage} setErrMsg={this.setErrMsg} path="/contact/details/:id" />
                <Route
                    exact
                    render={(props) => <ContactList onChangeFilter={this.onChangeFilter} contacts={contacts} {...props} />}
                    setErrMsg={this.setErrMsg}
                    path="/contact/"
                />
                {errMsg && <p>{this.state.errMsg}</p>}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        contacts: state.contactReducer.contacts,
    };
};

const mapDispatchToProps = {
    loadContacts,
};

export const ContactPage = connect(mapStateToProps, mapDispatchToProps)(_ContactPage);
