var React = require('react'),
    ToysIndexItem = require('./toys_index_item'),
    HashHistory = require('react-router').hashHistory;

var ToysIndex = React.createClass({


  render: function() {
    var toys = this.props.toys;
    if (toys){
      return (
        <ul>
          {toys.map(function(toy){
            return <ToysIndexItem pokemonId={this.props.pokemonId}
              key={toy.id}
              toy={toy}/> ;
          }.bind(this))}
        </ul>
      );

    }else{
      return ;
    }
  }

});

module.exports = ToysIndex;
