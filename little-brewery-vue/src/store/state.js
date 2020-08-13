const STORAGE_BEERS = 'beersLocalstorage';
const STORAGE_USERS = 'usersLocalstorage';


let beers_localstorage = localStorage.getItem(STORAGE_BEERS);
let users_localstorage = localStorage.getItem(STORAGE_USERS);

let beersData = (beers_localstorage =='undefined')? [] : JSON.parse(beers_localstorage);
let usersData = (users_localstorage == 'undefined')?[]: JSON.parse(users_localstorage);

export default {
    beers: beersData,
    users: usersData,
   
}