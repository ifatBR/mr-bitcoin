import { Component } from 'react';
import { ChartStats } from '../../cmps/ChartStats';
import bitcoinService from '../../services/bitcoinService';
import './StatisticPage.scss';

export class StatisticPage extends Component {
    state = {
        marketPrice: null,
        confirmedTransactions: null,
        transactionDates: null,
    };
    async componentDidMount() {
        this.setMarketPrices();
        this.setTransactionsInfo();
    }

    setMarketPrices = async () => {
        const marketPrice = await bitcoinService.getMarketPrice();
        this.setState({ marketPrice });
    };

    setTransactionsInfo = async () => {
        const confirmedTransactions = await bitcoinService.getConfirmedTransactions();
        this.setState({confirmedTransactions});
    };
    render() {
        const { marketPrice, confirmedTransactions } = this.state;
        return (
            <div>
                {confirmedTransactions  && <ChartStats data={confirmedTransactions} title={'Confirmed Transactions'}/>}
                {marketPrice  && <ChartStats data={marketPrice} title={'Market Price'}/>}
            </div>
        );
    }
}
