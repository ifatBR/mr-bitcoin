import React, { Component } from 'react';
import './App.scss';
import { AppHeader } from './cmps/AppHeader';
import { HomePage } from './pages/HomePage';
import { ContactPage } from './pages/ContactPage';
import { StatisticPage } from './pages/StatisticPage';
import { ContactDetailsPage } from './pages/ContactDetailsPage';
import { ContactEditPage } from './pages/ContactEditPage';
import { HashRouter as Router, Redirect, Route, Switch } from 'react-router-dom';

export class App extends Component {
    state = {
        // isHomePage: true,
        // isStatisticPage: false,
        // isContactEditPage: false,
    };
    // onHomePage = () => {
    //     this.setState({ isHomePage: true, isStatisticPage: false, isContactEditPage: false });
    // };
    // onContactPage = () => {
    //     this.setState({ isHomePage: false, isStatisticPage: false, isContactEditPage: false });
    // };
    // onStatisticPage = () => {
    //     this.setState({ isHomePage: false, isStatisticPage: true, isContactEditPage: false });
    // };
    // openContactEdit = () => {
    //     this.setState({ isHomePage: false, isStatisticPage: false, isContactEditPage: true });
    // };

    render() {
        // const { isHomePage, isStatisticPage, isContactEditPage } = this.state;
        return (
            <Router>
                <div className="app">
                    <AppHeader/>
                    {/* TODO: Replace header */}
                    {/* <header className="app-header">
                        <ul>
                            <li>
                                <button onClick={this.onHomePage}>Home</button>
                            </li>
                            <li>
                                <button onClick={this.onContactPage}>Contacts</button>
                            </li>
                            <li>
                                <button onClick={this.onStatisticPage}>Staistics</button>
                            </li>
                        </ul>
                    </header> */}
                    <main className="app-main">
                        <Switch>
                            <Route component={ContactPage} path='/contact'/>
                            <Route component={StatisticPage} path='/statistic'/>
                            <Route component={HomePage} path='/'/>
                        {/* {isHomePage && <HomePage />}
                        {!isHomePage && !isStatisticPage && !isContactEditPage && <ContactPage openContactEdit={this.openContactEdit} />}
                        {!isHomePage && isStatisticPage && !isContactEditPage && <StatisticPage />}
                        {!isHomePage && !isStatisticPage && isContactEditPage && <ContactEditPage />} */}
                        </Switch>
                    </main>
                </div>
            </Router>
        );
    }
}
