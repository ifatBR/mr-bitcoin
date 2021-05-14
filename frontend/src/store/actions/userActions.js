import userService from '../../services/userService';
import bitcoinService from '../../services/bitcoinService';

export function saveUser(userName) {
    return async (dispatch) => {
        const user = await userService.add(userName);
        const rate = await bitcoinService.getRate(user.coins);
        dispatch({ type: 'SET_USER', user });
        dispatch({ type: 'SET_RATE', rate });
    };
}

export function transferCoins(amount) {
    return async (dispatch, getState) => {
        let user = { ...getState().userReducer.user };
        if (user.coins < amount) return 'not enough coins';
        const contact = getState().contactReducer.contact;
        const move = userService.getMove(contact, amount);
        user.moves.push(move);
        user.coins -= amount;
        user = await userService.update(user);
        dispatch({ type: 'SET_USER', user });
    };
}
