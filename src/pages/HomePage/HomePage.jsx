import { Component } from 'react';
import bitcoinService from '../../services/bitcoinService';
import userService from '../../services/userService';
import './HomePage.scss';

export class HomePage extends Component {
    state = {
        user: null,
        rate: 0,
        isShowInfo:false
    };

    componentDidMount() {
        const user = userService.getUser();
        this.setState({ user }, () => this.setRate());
    }

    setRate = async () => {
        try {
            const rate = await bitcoinService.getRate(this.state.user.coins);
            this.setState({ rate });
        } catch (err) {
            console.log('error:', err);
        }
    };
    render() {
        const { user, rate } = this.state;
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
