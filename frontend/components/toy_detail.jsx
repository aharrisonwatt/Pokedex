var React = require('react'),
    PokemonStore = require('../stores/pokemon_store');

var ToyDetail = React.createClass({

  getInitialState: function() {
    return {
      toy: this.getStateFromStore()
    };
  },

  _onChange: function() {
    this.setState({toy: this.getStateFromStore()});
  },

  getStateFromStore: function() {
    var pokeId = parseInt(this.props.params.pokemonId);
    var toyId = parseInt(this.props.params.toyId);
    return PokemonStore.findToy(pokeId, toyId);
  },

  componentDidMount: function() {
    this.listenerToken = PokemonStore.addListener(this._onChange);
  },

  componentWillUnmount: function() {
    this.listenerToken.remove();
  },

  componentWillReceiveProps: function(newProps) {
  },

  render: function() {
    return (
      <div  className="detail">
        <image src={this.state.toy.image_url}></image>
      </div>
    );
  }

});

module.exports = ToyDetail;
