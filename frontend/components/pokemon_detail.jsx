var React = require('react'),
    PokemonStore = require('../stores/pokemon_store'),
    ClientActions = require('../actions/client_actions'),
    ToysIndex = require('./toys_index');

var PokemonDetail = React.createClass({
  getInitialState: function() {
    return this.getStateFromStore();
  },

  componentDidMount: function() {
    this.listenerToken = PokemonStore.addListener(this.resetState);
  },

  componentWillUnmount: function(){
    this.listenerToken.remove();
  },

  resetState: function(){
    this.setState(this.getStateFromStore());
  },

  getStateFromStore: function() {
    return {
      pokemon: PokemonStore.find(parseInt(this.props.params.pokemonId))
    };
  },

  componentWillReceiveProps: function(newProps) {
    ClientActions.fetchSinglePokemon(parseInt(newProps.params.pokemonId));
  },

  render: function() {
    var details = <div></div> ;
    var pokemon = this.state.pokemon;
    if(pokemon){
      details = (
        <ul>
          <image src={pokemon.image_url}></image>
          {Object.keys(pokemon).map(function(property, idx){
            if (!(property === "image_url") && !(property === "toys")){
              return <li key={idx}>{property}: {pokemon[property]} </li>;
            }else if (property === "toys"){
              return (
                <li key={idx}>
                  <ToysIndex pokemonId={this.props.params.pokemonId}
                    toys={pokemon[property]}/>
                </li>
              );
            }
          }.bind(this))}
        </ul>
      );
    }

    return (
      <div>
        <div className="pokemon-detail-pane">
          <div className="detail">
            {details}
          </div>
        </div>
        <div>
          {this.props.children}
        </div>
      </div>
    );
  }

});

module.exports = PokemonDetail;
