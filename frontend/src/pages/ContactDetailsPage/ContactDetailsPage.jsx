import { Component } from 'react';
import { TransferFund } from '../../cmps/TransferFund';
import { Msg } from '../../cmps/Msg';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { loadContact, removeContact } from '../../store/actions/contactActions';
import { transferCoins } from '../../store/actions/userActions';
import { MoveList } from '../../cmps/MoveList';
import './ContactDetailsPage.scss';

export class _ContactDetailsPage extends Component {
    state = {
        isShowMsg: false,
        amount: 0,
        moves: null,
    };

    async componentDidMount() {
        await this.props.loadContact(this.props.match.params.id);
        this.setMoves();
    }

    async componentDidUpdate(prevProps) {
        if (prevProps.match.params.id === this.props.match.params.id) return;
        await this.props.loadContact(this.props.match.params.id);
        this.setMoves();
    }

    setMoves = () => {
        const { user, contact } = this.props;
        const moves = user.moves.filter((move) => move.toId === contact._id);
        this.setState({ moves });
    };

    onShowMsg = () => {
        this.setState({ isShowMsg: true });
    };

    onHideMsg = () => {
        this.setState({ isShowMsg: false });
    };

    onRemoveContact = () => {
        this.props.removeContact(this.props.contact._id);
        this.props.history.push('/contact');
        this.onHideMsg();
    };

    onBack = () => {
        this.props.history.push('/contact');
    };

    onSetAmount = (amount) => {
        this.setState({ amount });
    };

    onTransferCoins = () => {
        this.props.transferCoins(this.state.amount);
        this.setMoves();
        this.setState({ amount: 0 });
    };

    render() {
        const { isShowMsg, amount } = this.state;
        const { contact } = this.props;
        if (!contact)
            return (
                <img
                    className="loader"
                    src="https://i.pinimg.com/originals/b3/30/0a/b3300a501c0897d36683d6f6d0b000a5.gif"
                    alt="Loading"
                ></img>
            );
        return (
            contact && (
                <div className="contact-detail-page">
                    <button onClick={this.onBack} className="btn standard back">
                        ← Back
                    </button>
                    <div className="contact-main-container">
                        <div className="contact-detail-container">
                            <div className="contact-info">
                                <img src={`https://i.pravatar.cc/150?u=${contact._id}`} alt="" />
                                <h2>{contact.name}</h2>
                                <h3>{contact.phone}</h3>
                                <h3>{contact.email}</h3>
                            </div>
                            <div className="btn-container">
                                <button onClick={this.onShowMsg} className="btn alert">
                                    Delete
                                </button>
                                <Link to={'/contact/edit/' + contact._id} className="btn standard">
                                    Edit
                                </Link>
                            </div>
                        </div>

                        {isShowMsg && (
                            <Msg onHideMsg={this.onHideMsg}>
                                <p>Are you sure you want to delete this contact?</p>
                                <button className="btn standard" onClick={this.onRemoveContact}>
                                    Yes
                                </button>
                                <button onClick={this.onHideMsg} className="btn alert">
                                    No
                                </button>
                            </Msg>
                        )}
                        <div className="transfer-container">
                            <TransferFund
                                contact={contact}
                                amount={amount}
                                onSetAmount={this.onSetAmount}
                                onTransferCoins={this.onTransferCoins}
                            />
                            <MoveList moves={this.state.moves} />
                        </div>
                    </div>

                    <div className="paging">
                        <Link to={'/contact/details/' + contact.prevContact}>← Prev</Link>
                        <Link to={'/contact/details/' + contact.nextContact}>Next →</Link>
                    </div>
                </div>
            )
        );
    }
}

const mapStateToProps = (state) => {
    return {
        contact: state.contactReducer.contact,
        user: state.userReducer.user,
    };
};

const mapDispatchToProps = {
    loadContact,
    removeContact,
    transferCoins,
};

export const ContactDetailsPage = connect(mapStateToProps, mapDispatchToProps)(_ContactDetailsPage);
