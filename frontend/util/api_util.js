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
  }
};

module.exports = ApiUtil;
