'use strict'

const React = require('react');
const actions = require('../actions');
const resultStore = require('../stores/resultStore');

const SearchField = require('./SearchField');
const SearchResults = require('./SearchResults');

class Autocomplete extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      results: resultStore.getState().results,
      query: ''
    };
    this.handleSearchResultChange = this.handleSearchResultChange.bind(this)
  }
  componentDidMount(){
    this.removeListener = resultStore.addListener(({results})=>{
        this.setState({results})
      })
  }
  componentWillUnmount(){
    this.removeListener();
  }
  handleSearchResultChange(ev){
    const query = ev.target.value;
    this.setState({query})

    if (query.length > 2){
      actions.search(query)
    }
  }
  render() {
    const {query, results} = this.state
    return (
      <div className="autocomplete">
        <h2>Autocomplete</h2>
        <SearchField
          value={query}
          onChange={this.handleSearchResultChange}
          />
        <SearchResults
          results={results}
         />
      </div>
    );
  }
}

module.exports = Autocomplete;
