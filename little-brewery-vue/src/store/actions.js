const STORAGE_BEERS = 'beersLocalstorage';
const STORAGE_USERS = 'usersLocalstorage';
import {getBeers, getUsers, getBeerById} from '@/api/api';

export default {
    
    beersToLocalStorage: ({ commit }) => {
        getBeers().then(response=>{
            if(response != null){
            
            commit('LOAD_BEERS_APIDATA', response);
            localStorage.setItem(STORAGE_BEERS, JSON.stringify(response));
            }
            
        })
    },

    usersToLocalStorage: ({ commit }) => {
        getUsers().then(response=>{
            if(response != null){
                console.log(response);
            
            commit('LOAD_USERS_APIDATA', response);
            localStorage.setItem(STORAGE_USERS, JSON.stringify(response));
            }
            
        })
    },

    beerDetailById: (state,{beerId}) => {
        return getBeerById(beerId).then(response => {
            console.log(response);
            return response;
        })
        .catch((err)=>{
            console.error(err);
        });

    },

    isAdmin: (state, {user}) => {
        if (user.role == 'admin'){
            return true;
        } else {
            return false;
        }
    }

}