import { fetchReq } from "./fetch"; 
import axios from 'axios';

const API_URL = "http://localhost:8000/api";
const TOKEN = '74taDYu8veBqPLkuwSFQIoo6iYiT7LdzJ3QPxgK0b6nHMmAPSkDlQaUgnoolq00sIlFjhQ3224SDhnFhTqnfAiq0w1ae5qqioeFq';



export const axiosGet = (path) => {
  return axios.get(API_URL + path)
  .then(response => {
    return response.data;
  })
};


export const axiosGetPrivate = (path, tokenUser) => {

  axios.defaults.headers.common['Content-type'] = 'application/json';
  axios.defaults.headers.common['Authorization'] = 'Bearer ' + tokenUser;
  return axios.get(API_URL + path)
  .then(response => {
    return response.data;
  })
};

export const axiosPost = (path, body) => {
  return axios.post(API_URL + path, body)
  .then(response => {
    console.log(response);
    return response.data;
  })
}

export const axiosPostPrivate = (path, body, tokenUser) => {
  axios.defaults.headers.common['Content-type'] = 'application/json';
  axios.defaults.headers.common['Authorization'] = 'Bearer ' + tokenUser;
  return axios.post(API_URL + path, body)
  .then(response => {
    console.log(response);
    return response.data;
  }).catch(error => {
    console.error(error);
    return (error);
  })
}

export const axiosPostFormPrivate = (path, body, tokenUser) => {
  axios.defaults.headers.common['Content-type'] = 'multipart/form-data';
  axios.defaults.headers.common['Authorization'] = 'Bearer ' + tokenUser;
  return axios.post(API_URL + path, body)
  .then(response => {
    console.log(response);
    return response.data;
  }).catch(error => {
    console.error(error);
    return (error);
  })
}

export const axiosPatch = (path, tokenUser) => {

  axios.defaults.headers.common['Content-type'] = 'application/json';
  axios.defaults.headers.common['Authorization'] = 'Bearer ' + tokenUser;
  return axios.patch(API_URL + path)
  .then(response => {
    return response;
  })
};

export const axiosPut = (path, body, tokenUser) => {
  axios.defaults.headers.common['Content-type'] = 'application/json';
  axios.defaults.headers.common['Authorization'] = 'Bearer ' + tokenUser;
  return axios.put(API_URL + path, body)
  .then(response => {
    console.log(response);
    return response.data;
  }).catch(error => {
    console.error(error);
    return (error);
  })
}


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