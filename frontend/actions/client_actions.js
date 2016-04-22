var ApiUtil = require('../util/api_util');


var ClientActions = {
  fetchAllPokemons: function() {
    ApiUtil.fetchAllPokemons();
  },
  fetchSinglePokemon: function(pokemonId) {
    ApiUtil.fetchSinglePokemon(pokemonId);
  }
};

module.exports = ClientActions;
