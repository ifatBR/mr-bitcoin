import contactService from '../../services/contactService';
import { Component } from 'react';
import { ContactList } from '../../cmps/ContactList';
import { ContactDetailsPage } from '../ContactDetailsPage';
import { ContactEditPage } from '../ContactEditPage';
import { Route } from 'react-router';
import './ContactPage.scss';

export class ContactPage extends Component {
    state = {
        // contacts: null,
        errMsg:null
    };

    componentDidMount() {
        // this.loadContacts();
    }

    // loadContacts = async (filter = null) => {
    //     try{

    //         const contacts = await contactService.getContacts(filter);
    //         this.setState({ contacts });
    //     }catch(err){
    //         this.setState({ errMsg: 'Could not load contacts' })
    //     }
    // };

    setErrMsg =(errMsg)=>{
        this.setState({errMsg})
        setTimeout(this.setState({errMsg:null}),1000)
    }


    // onChangeFilter = (filter) => {
    //     this.loadContacts(filter);
    // };
    render() {
        const { errMsg} = this.state;
        return (
            <div>
                <Route component={ContactEditPage} setErrMsg={this.setErrMsg} path="/contact/edit/:id?" />
                <Route exact component={ContactDetailsPage} setErrMsg={this.setErrMsg} path="/contact/:id" />
                <Route exact component={ContactList} setErrMsg={this.setErrMsg} path="/contact/" />
                {errMsg && <p>{this.state.errMsg}</p>}
            </div>
        );
    }
}
