
import { Component } from 'react'
// import userService from '../../services/userService';
import { saveUser} from '../../store/actions/userActions';
import { connect } from 'react-redux';

import './SignupPage.scss'

export class _SignupPage extends Component {
    state={
        userName:null
    }
    onHandleChange = ({ target }) => {
        const userName = target.value;
        this.setState({ userName});
    };
    onSaveUSer = async ()=>{
        if(!this.state.userName) return
        await this.props.saveUser(this.state.userName);
        this.setState({ userName:null});
        this.props.history.push('/')
        console.log(this.props.user)
    }
    get isGrey(){
        return this.state.userName? '':'grey ';
    }

    render() {
        return (
            <div>
                <h2>Please signup</h2>
                <label htmlFor="">User name: <input type="text" onChange={this.onHandleChange}/></label>
                <button onClick={this.onSaveUSer} className={this.isGrey+'btn standard'}>Save</button>
            </div>
        )
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

