import {storageService} from './storageService'
export default {
    getUser,
    save,
    moveCoins,
};

const USERS_KEY='users';

var gUser = null;

var gUsers =[]

function getUser() {
    return gUser;
}


function save(name) {
    const newUser = {
        name,
        coins: 100,
        moves: []
    };
    gUser = newUser;
    gUsers  = _getUsers();
    gUsers.push(newUser);
    _saveUsers()
    return newUser
}

// function save(name) {
//     gUsers  = _getUsers();
//     let user = gUsers.find((name) => name.split('')[0].toLowerCase() === name.toLowerCase())
//     if(!user){
//     user = {
//         name,
//         coins: 100,
//         moves: []
//     };}
//     gUser = user;
//     gUsers.push(user);
//     _saveUsers()
//     return gUser
// }

function moveCoins(contact, amount) {
    gUser.coins -= amount;
    
    const newMove = {
        toId: contact._id,
        to: contact.name,
        at: Date.now(),
        amount,
    };
    gUser.moves.push(newMove);
    return gUser;
}

function _getUsers(){
    gUsers = storageService.load(USERS_KEY);
    if(gUsers?.length) return gUsers;
    gUsers = userList;
    _saveUsers()
    return gUsers;
}

function _saveUsers(){
    storageService.store(USERS_KEY, gUsers);

}
const userList = [
    {
        name: 'Ochoa Hyde',
        coins: 200,
        moves: [],
    },
    {
        name: 'Hallie Mclean',
        coins: 300,
        moves: [],
    },
    {
        name: 'Parsons Norris',
        coins: 150,
        moves: [],
    },
    {
        name: 'Rachel Lowe',
        coins: 50,
        moves: [],
    },
    {
        name: 'Dominique Soto',
        coins: 250,
        moves: [],
    },
    {
        name: 'Shana Pope',
        coins: 200,
        moves: [],
    },
    {
        name: 'Faulkner Flores',
        coins: 700,
        moves: [],
    },
    {
        name: 'Holder Bean',
        coins: 375,
        moves: [],
    },
    {
        name: 'Rosanne Shelton',
        coins: 125,
        moves: [],
    },
    {
        name: 'Pamela Nolan',
        coins: 255,
        moves: [],
    },
    {
        name: 'Roy Cantu',
        coins: 200,
        moves: [],
    },
    {
        name: 'Ollie Christian',
        coins: 835,
        moves: [],
    },
    {
        name: 'Nguyen Walls',
        coins: 485,
        moves: [],
    },
    {
        name: 'Glenna Santana',
        coins: 355,
        moves: [],
    },
    {
        name: 'Malone Clark',
        coins: 500,
        moves: [],
    },
    {
        name: 'Floyd Rutledge',
        coins: 520,
        moves: [],
    },
    {
        name: 'Grace James',
        coins: 475,
        moves: [],
    },
    {
        name: 'Tanner Gates',
        coins: 300,
        moves: [],
    },
    {
        name: 'Lilly Conner',
        coins: 220,
        moves: [],
    },
];
