import { Component } from 'react';
// import { Chart } from '../../cmps/Chart_Old';
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
        console.log('confirmedTransactions.values:', confirmedTransactions)
        this.setState({confirmedTransactions});

        // this.setState({ confirmedTransactions: confirmedTransactions.values.map(({ y }) => '' + y) });
    };
    render() {
        const { marketPrice, confirmedTransactions, transactionDates } = this.state;
        // console.log('transactionDates:', transactionDates);
        console.log('confirmedTransactions:', confirmedTransactions);
        return (
            //     confirmedTransactions && transactionDates && <div className="statistic-page">
            //         <h2>Statistics</h2>
            //         <div className="chart-container">
            //             <Chart2 data={confirmedTransactions} categories={transactionDates}/>
            //             {/* {marketPrice && <Chart data={marketPrice} title={'Market Price'} />}
            //             {confirmedTransactions && <Chart data={confirmedTransactions} title={'Confirmed Transactions'} />} */}
            //         </div>
            //     </div>
            <div>
                {confirmedTransactions  && <ChartStats data={confirmedTransactions} title={'Confirmed Transactions'}/>}
                {marketPrice  && <ChartStats data={marketPrice} title={'Market Price'}/>}
            </div>
        );
    }
}
