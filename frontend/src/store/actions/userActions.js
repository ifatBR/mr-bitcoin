import userService from '../../services/userService'
import bitcoinService from '../../services/bitcoinService'
export function setUser(){
    return async dispatch => {
        const user = await userService.getUser()
        dispatch({type:'SET_USER', user})
    }
}
export function saveUser(userName){
    return async dispatch => {
        const user = await userService.save(userName)
        const rate = await bitcoinService.getRate(user.coins);
        console.log('rate:', rate)
        dispatch({type:'SET_USER', user})
        dispatch({type:'SET_RATE', rate})
    }
}

export function transferCoins(amount){
    return async (dispatch, getState) => {
        const userCoins = getState().userReducer.user.coins
        if(userCoins<amount) return ('not enough coins')
        const contact = getState().contactReducer.contact;
        const user = await userService.moveCoins(contact, amount);
        dispatch({type:'SET_USER', user})
        console.log('user:', user)
    }
}