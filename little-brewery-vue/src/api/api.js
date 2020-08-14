import { fetchReq } from "./fetch"; 
const API_URL = "http://localhost:8000/api";
const TOKEN = '74taDYu8veBqPLkuwSFQIoo6iYiT7LdzJ3QPxgK0b6nHMmAPSkDlQaUgnoolq00sIlFjhQ3224SDhnFhTqnfAiq0w1ae5qqioeFq';


export const getBeers = () => fetchReq(API_URL + '/beers',{
    method: 'GET',
    mode: "cors",
    cache: "default",
    Authorization: 'Bearer '+ TOKEN
});

export const getBeerById = (id) => fetchReq(API_URL + '/beers/' + id,{
  method: 'GET',
  mode: "cors",
  cache: "default",
  Authorization: 'Bearer '+ TOKEN

});

export const getUsers = () => fetchReq(API_URL + '/users',{
  method: 'GET',
  mode: "cors",
  cache: "default",
  Authorization: 'Bearer '+ TOKEN
});

export const getOrders = () => fetchReq(API_URL + '/orders',{
  method: 'GET',
  mode: "cors",
  cache: "default",
  Authorization: 'Bearer '+ TOKEN
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