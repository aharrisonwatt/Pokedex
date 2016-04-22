var React = require('react'),
    HashHistory = require('react-router').hashHistory;

var ToysIndexItem = React.createClass({

  showDetail: function() {
    HashHistory.push(
      "/pokemon/" + this.props.pokemonId + "/toys/" + this.props.toy.id
    );
  },

  render: function() {
    var toy = this.props.toy;
    return (
      <li onClick={this.showDetail} className="toy-list-item">
        {toy.name}
        {toy.price}
        {toy.happiness}
      </li>
    );
  }

});

module.exports = ToysIndexItem;
