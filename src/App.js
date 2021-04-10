import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.scss';
import { AppHeader } from './cmps/AppHeader';
import { HomePage } from './pages/HomePage';
import { ContactPage } from './pages/ContactPage';
import { StatisticPage } from './pages/StatisticPage';
import { SignupPage } from './pages/SignupPage';
import { HashRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
export class _App extends Component {
    state={
        user:null
    }
    // componentDidMount() {
        // const user = this.props.user;
        // this.setState(user)
    // }
    // componentDidUpdate(prevProps, prevState) {
        // if(prevProps.user === this.props.user) return;
        // this.setState({user:this.props.user})

    // }
    
    render() {
        const SignedUpRoute = (props) => {
            return props.isUser ? <Route component={props.component} path={props.path} /> : <Redirect to="/signup" />;
        };
        return (
            <Router>
                <div className="app">
                    <AppHeader />
                    <main className="app-main">
                        <Switch>
                            <Route component={SignupPage} path="/signup" />
                            <SignedUpRoute isUser={this.props.user} component={ContactPage} path="/contact" />
                            <SignedUpRoute isUser={this.props.user} component={StatisticPage} path="/statistic" />
                            <SignedUpRoute isUser={this.props.user} component={HomePage} path="/" />
                        </Switch>
                    </main>
                </div>
            </Router>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.userReducer.user,
    };
};

export const App = connect(mapStateToProps)(_App);
