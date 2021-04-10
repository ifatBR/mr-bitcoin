import { Component } from 'react';
import './HomePage.scss';
import { connect } from 'react-redux';

export class _HomePage extends Component {
    render() {
        const { user, rate } = this.props;
        return (
            user && (
                <div className="home-page">
                    <div className="background"></div>
                    <div className="user-info">
                        <h2>{user.name}</h2>
                        <h3>
                            Coins: <span>{user.coins}</span>
                        </h3>
                        <h3>
                            Rate: <span>{rate}</span>
                        </h3>
                    </div>
                </div>
            )
        );
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.userReducer.user,
        rate:state.userReducer.rate
    };
};


export const HomePage = connect(mapStateToProps)(_HomePage);
