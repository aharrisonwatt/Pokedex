var React = require('react'),
    HashHistory = require('react-router').hashHistory,
    ClientActions = require('../actions/client_actions');


var PokemonIndexItem = React.createClass({

  showDetail: function(){
    HashHistory.push("pokemon/" + this.props.pokemon.id);
  },

  render: function() {
    var pokemon = this.props.pokemon;
    return (
      <li className="poke-list-item" onClick={this.showDetail}>
        <ul>
          <li>{pokemon.name}</li>
          <li>{pokemon.poke_type}</li>
        </ul>
      </li>
    );
  }

});

module.exports = PokemonIndexItem;
