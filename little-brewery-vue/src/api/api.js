import { fetchReq } from "./fetch"; //引用fetch.js
const API_URL = "http://localhost:8000/api";


export const getPokemons = () => fetchReq(API_URL + '/' + 'pokemons',{
    method: 'GET',
    mode: "cors",
    cache: "default"
});

export const getPokemonDetailById = (id) => fetchReq(API_URL + '/' + 'pokemons' + '/' + id,{
  method: 'GET',
  mode: "cors",
  cache: "default"
});

export const getUsers = () => fetchReq(API_URL + '/' + 'users',{
  method: 'GET',
  mode: "cors",
  cache: "default"
});

export const getUserTeam = (id) => fetchReq(API_URL + '/' + 'users' + '/' + id + '/' + 'team',{
  method: 'GET',
  mode: "cors",
  cache: "default"
});
/*
export const getSpecificNotes = (id) => fetchReq(API_URL + '/' + id,{
  method: 'GET',
  mode: "cors",
  cache: "default"
});

export const postNote = (newNoteStruct) => fetchReq(API_URL, {
    body: JSON.stringify(newNoteStruct),
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json;charset=UTF-8',
      },
    mode: "cors",
    cache: "default"
});

export const editNote = (id, newNoteStruct) => fetchReq(API_NOTE + '/' + id, {
    body: JSON.stringify(newNoteStruct),
    method: 'PUT',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json;charset=UTF-8'
      },
    mode: "cors",
    cache: "default"
});

export const deleteNote = (id) => fetchReq(API_NOTE + '/' + id, {
    //body: JSON.stringify(newNoteStruct),
    method: 'DELETE',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json;charset=UTF-8'
      },
    mode: "cors",
    cache: "default"
});
*/