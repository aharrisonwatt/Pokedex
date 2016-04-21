var React = require('react'),
    PokemonStore = require('../stores/pokemon_store'),
    ClientActions = require('../actions/client_actions'),
    PokemonIndexItem = require('./pokemon_index_item');

var PokemonsIndex = React.createClass({
  getInitialState: function() {
    return {
      pokemons: PokemonStore.all()
    };
  },

  componentDidMount: function() {
    this.listenerToken = PokemonStore.addListener(this._storeChanged);
    ClientActions.fetchAllPokemons();
  },

  componentWillUnmount: function() {
    this.listenerToken.remove();
  },

  _storeChanged: function(){
    this.setState({pokemons: PokemonStore.all()});
  },

  render: function() {
    var pokemonItems = this.state.pokemons.map(function(pokemon) {
      return <PokemonIndexItem key={pokemon.id} pokemon={pokemon} />;
    });

    return (
      <div>
        <ul>
          {pokemonItems}
        </ul>
      </div>
    );
  }

});

module.exports = PokemonsIndex;
