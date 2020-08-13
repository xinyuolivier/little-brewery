export default {
    getPokemons: (state) => () => { return state.pokemons},

    getPokemonDetail: (state) => (pokemonId) => {
      return Object.values(state.pokemons)
      .filter(pokemon => pokemon.id.toString() == pokemonId.toString())
    },

    getPokedexColor: (state) => (type) =>{
      return state.pokedexColors[type];
    },

    getPokemonById: (state) => (pokemonId) => {
      return state.pokemons.data[pokemonId-1].pokemons;
      
    },
    
    getUsers: (state) =>() => {return state.users},

    getProfilImage: (state) => (profileId) => {return state.profilImage[profileId];},

    getTeam: (state) => (userId) => {return state.userTeam[userId]}
  }