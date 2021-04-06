import { Component } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import './AppHeader.scss';
const _AppHeader = (props) => {
   console.log('props.match.path:', props)
    return (
        <header className={(props.location.pathname==='/')? 'app-header homepage':'app-header'}>
            <h2 className="logo">
                Mr<span>.</span>Bitcoin
            </h2>
            <div>
                <NavLink exact to="/" className="nav-link home" activeClassName="active-nav" title="Home">
                    {/* Home */}
                </NavLink>

                <NavLink to="/contact" className="nav-link contact" activeClassName="active-nav" title="Contacts">
                    {/* Contacts */}
                </NavLink>

                <NavLink to="/statistic" className="nav-link statistic" activeClassName="active-nav" title="Statistics">
                    {/* Statistics */}
                </NavLink>
            </div>
        </header>
    );
};

export const AppHeader = withRouter(_AppHeader);
