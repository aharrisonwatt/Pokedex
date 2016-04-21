var React = require('react');

var PokemonIndexItem = React.createClass({

  render: function() {
    var pokemon = this.props.pokemon;
    return (
      <li className="poke-list-item">
        <ul>
          <li>{pokemon.name}</li>
          <li>{pokemon.poke_type}</li>
        </ul>
      </li>
    );
  }

});

module.exports = PokemonIndexItem;
