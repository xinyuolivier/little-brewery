export default {
  LOAD_POKEMONS_APIDATA: (state, pokemons) => {
    state.pokemons = pokemons
  },
  LOAD_USERS_APIDATA: (state, users) =>{
    state.users = users
  },
  ADD_CONTENT: (state, { noteKey, content }) => {
      state.board.notes[noteKey].content.push(content);
    },
  
  DELETE_CONTENT: (state, { noteKey,contentKey}) => {
    state.board.notes[noteKey].content.splice(contentKey,1)
  },
}