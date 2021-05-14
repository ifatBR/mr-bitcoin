import { Component } from 'react';
// import userService from '../../services/userService';
import { saveUser } from '../../store/actions/userActions';
import { connect } from 'react-redux';

import './SignupPage.scss';

export class _SignupPage extends Component {
    state = {
        userName: null,
    };
    onHandleChange = ({ target }) => {
        const userName = target.value;
        this.setState({ userName });
    };
    onSaveUSer = async () => {
        if (!this.state.userName) return;
        await this.props.saveUser(this.state.userName);
        this.setState({ userName: null });
        this.props.history.push('/');
    };
    get isGrey() {
        return this.state.userName ? '' : 'grey ';
    }

    render() {
        return (
            <form className="signup-page" onSubmit={this.onSaveUSer}>
                <h2>Please signup</h2>
                <label htmlFor="user-name">
                    User name: <input type="text" id="user-name" onChange={this.onHandleChange} />
                </label>
                <button className={this.isGrey + 'btn standard'}>Save</button>
            </form>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.userReducer.user,
    };
};

const mapDispatchToProps = {
    saveUser,
};

export const SignupPage = connect(mapStateToProps, mapDispatchToProps)(_SignupPage);
