var Store = require('flux/utils').Store,
    Dispatcher = require('../dispatcher/dispatcher');

var PokemonStore = new Store(Dispatcher);

var _pokemons = {};

PokemonStore.all = function() {
  return Object.keys(_pokemons).map(function(key) {
    return _pokemons[key];
  });
};

PokemonStore.find = function(pokemonId) {
  return _pokemons[pokemonId];
};

PokemonStore.__onDispatch = function(payload) {
  switch (payload.actionType) {
    case "POKEMONS_RECEIVED":
      resetPokemons(payload.pokemons);
      PokemonStore.__emitChange();
      break;
  }
};

function resetPokemons(pokemonsArray) {
  _pokemons = {};
  pokemonsArray.forEach(function(pokemon) {
    _pokemons[pokemon.id] = pokemon;
  });
}

module.exports = PokemonStore;
