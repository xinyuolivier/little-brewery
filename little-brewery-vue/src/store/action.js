const STORAGE_POKEMONS = 'pokemonsLocalstorage';
const STORAGE_USERS = 'usersLocalstorage';
import {getPokemons, getPokemonDetailById, getUsers, getUserTeam} from '@/api/api';

export default {
    
    pokemonsToLocalStorage: ({ commit }) => {
        getPokemons().then(response=>{
            if(response != null){
                console.log(response);
            
            commit('LOAD_POKEMONS_APIDATA', response);
            localStorage.setItem(STORAGE_POKEMONS, JSON.stringify(response));
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

    pokemonDetailById: (state,{pokemonId}) => {
        return getPokemonDetailById(pokemonId).then(response => {
            console.log(response);
            return response;
        })
        .catch((err)=>{
            console.error(err);
        });

    },

    userTeam: (state,{userId}) => {
        return getUserTeam(userId).then(response => {
            console.log(response);
            return response;
        })
        .catch((err)=>{
            console.error(err);
        });

    }

}