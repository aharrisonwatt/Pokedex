var React = require('react'),
    PokemonStore = require('../stores/pokemon_store');

var PokemonDetail = React.createClass({
  getInitialState: function() {
    return this.getStateFromStore();
  },
  getStateFromStore: function() {
    return {
      pokemon: PokemonStore.find(parseInt(this.props.params.pokemonId))
    };
  },

  

  // TODO: update componet props
  // componentWillReceiveProps: function(newProps){
  //   this.setState(this.getStateFromStore());
  // },

  render: function() {
    var details = <div></div> ;
    var pokemon = this.state.pokemon;
    if(pokemon){
      details = (
        <ul>
          <image src={pokemon.image_url}></image>
          {Object.keys(pokemon).map(function(property){
            if (!(property === "image_url")){
              return <li>{property}: {pokemon[property]} </li>;
            }
          })}
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
      </div>
    );
  }

});

module.exports = PokemonDetail;
