'use strict'

const React = require('react');

class SearchResults extends React.Component{
  render(){
    const results = this.props.results.map(function(result, key){
      return <li key={key}><a href={result.link}>{result.title}</a><p>{result.description}</p></li>
    })
    return(
      <ul className="search-results">
        {results}
      </ul>
    )
  }
}

module.exports = SearchResults;
