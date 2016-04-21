var React = require('react'),
    ReactDOM = require('react-dom'),
    PokemonsIndex = require('./components/pokemons_index'),
    PokemonDetail = require('./components/pokemon_detail'),
    Router = require('react-router').Router,
    Route = require('react-router').Route,
    HashHistory = require('react-router').hashHistory;


var App = React.createClass({

  render: function() {
    return (
      <div id="pokedex">
        <h1>Pokedex</h1>
        <div className="pokemon-index-pane">
          <PokemonsIndex />
        </div>
        {this.props.children}
      </div>
    );
  }

});

var routes = (
  <Route path="/" component={App}>
    <Route path="pokemon/:pokemonId" component={PokemonDetail}>
    </Route>
  </Route>
);

$(function() {
  ReactDOM.render(
    <Router history={HashHistory}>
      {routes}
    </Router>,
    document.getElementById('root')
  );
});
