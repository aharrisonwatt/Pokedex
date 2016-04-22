var React = require('react'),
    PokemonStore = require('../stores/pokemon_store');

var ToyDetail = React.createClass({

  // getInitialState: function() {
  //   return {
  //     :
  //   };
  // },

  _onChange: function() {

  },

  getStateFromStore: function() {
    var pokeId = this.props.pokemonId;
    var toyId = this.props.params.toyId;
    PokemonStore.findToy(pokeId, toyId);
  },

  componentDidMount: function() {

  },

  componentWillUnmount: function() {

  },

  componentWillReceiveProps: function(newProps) {

  },

  render: function() {
    return (
      <div  className="detail" />
    );
  }

});

module.exports = ToyDetail;
