export default {
    getBeers: (state) => () => { return state.beers},

    getBeerDetailById: (state) => (beerId) => {
      return Object.values(state.beers)
      .filter(beer => beer.id.toString() == beerId.toString())
    },

    
    
    getUsers: (state) =>() => {return state.users},

    /*getProfilImage: (state) => (profileId) => {return state.profilImage[profileId];},*/
  }