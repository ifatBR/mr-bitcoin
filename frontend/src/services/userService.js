import { httpService } from './httpService';

export default {
    add,
    getMove,
    update
};

async function add(name) {
    const newUser = {
        name,
        coins: 100,
        moves: []
    };
    const user= await httpService.post(`user`,newUser);

    return user
}

async function update(user) {
    const newUser= await httpService.put(`user/${user._id}`,user);
    return newUser

}

function getMove(contact,amount){
    return {
        toId: contact._id,
        to: contact.name,
        at: Date.now(),
        amount,
    };
}
