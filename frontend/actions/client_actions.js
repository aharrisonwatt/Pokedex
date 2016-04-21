var ApiUtil = require('../util/api_util');


var ClientActions = {
  fetchAllPokemons: function() {
    ApiUtil.fetchAllPokemons();
  }
};

module.exports = ClientActions;
