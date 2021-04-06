// import React, { Component } from 'react';
import './App.scss';
import { AppHeader } from './cmps/AppHeader';
import { HomePage } from './pages/HomePage';
import { ContactPage } from './pages/ContactPage';
import { StatisticPage } from './pages/StatisticPage';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

export function App() {

        return (
            <Router>
                <div className="app">
                    <AppHeader/>
                    <main className="app-main">
                        <Switch>
                            <Route component={ContactPage} path='/contact'/>
                            <Route component={StatisticPage} path='/statistic'/>
                            <Route component={HomePage} path='/'/>
                        </Switch>
                    </main>
                </div>
            </Router>
        );
}
