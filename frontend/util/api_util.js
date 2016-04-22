var ServerActions = require('../actions/server_actions');

var ApiUtil = {
  fetchAllPokemons: function() {
    $.ajax({
      method: 'GET',
      url: 'api/pokemon',
      success: function(pokemons) {
        ServerActions.recieveAllPokemons(pokemons);
      }
    });
  },
  fetchSinglePokemon: function(pokeId) {
    $.ajax({
      method: 'GET',
      url: 'api/pokemon/' + pokeId,
      success: function(pokemon) {
        ServerActions.receiveSinglePokemon(pokemon);
      }
    });
  }
};

module.exports = ApiUtil;
