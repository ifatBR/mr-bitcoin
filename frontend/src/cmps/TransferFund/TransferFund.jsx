import './TransferFund.scss';

export function TransferFund({ onSetAmount, onTransferCoins, contact, amount}) {

    const onHandleChange = (ev) => {
        const amount = ev.target.value;
        onSetAmount(amount);
    };

    const onSubmit = (ev) => {
        ev.preventDefault();
        onTransferCoins();
        console.log(ev.target)
    };


    return (
        <form onSubmit={onSubmit} className="transfer-fund">
            <h3>Transfer coins to {contact.name}</h3>
            <div className="transfer-info">
                <label>Amount: 
                    <input type="number" onChange={onHandleChange} value={amount}/>
                </label>
                <button className="btn standard">Transfer</button>
            </div>
        </form>
    );
}
