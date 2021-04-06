import { Component } from 'react';
import { Chart } from '../../cmps/Chart';
import bitcoinService from '../../services/bitcoinService';
import './StatisticPage.scss';

export class StatisticPage extends Component {
    state = {
        marketPrice: null,
        confirmedTransactions: null,
    };
    async componentDidMount() {
        this.setMarketPrices();
        this.confirmedTransactions();
    }

    setMarketPrices = async () => {
        const marketPrice = await bitcoinService.getMarketPrice();
        this.setState({ marketPrice: marketPrice.values.map(({ y }) => '' + y) });
    };

    confirmedTransactions = async () => {
        const confirmedTransactions = await bitcoinService.getConfirmedTransactions();
        this.setState({ confirmedTransactions: confirmedTransactions.values.map(({ y }) => '' + y) });
    };
    render() {
        const { marketPrice, confirmedTransactions } = this.state;
        return (
            <div className="statistic-page">
                <h2>Statistics</h2>
                <div className="chart-container">
                    {marketPrice && <Chart data={marketPrice} title={'Market Price'} />}
                    {confirmedTransactions && <Chart data={confirmedTransactions} title={'Confirmed Transactions'} />}
                </div>
            </div>
        );
    }
}
