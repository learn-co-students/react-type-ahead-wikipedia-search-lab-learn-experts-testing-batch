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
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e){
    this.setState({query: e.target.value});
    actions.search(e.target.value);
  }

  componentDidMount(){
    this.removeListeners = resultStore.addListener(results => {
      this.setState({results: results.results});
    });
  }

  componentWillUnmount(){
    this.removeListeners();
  }

  render() {
    return (
      <div className='autocomplete'>
        <h2>Autocomplete</h2>
        <SearchField value={this.state.query.length > 2 ? this.state.query : null} onChange={this.handleChange}/>
        <SearchResults results={this.state.results}/>
      </div>
    );
  }
}

module.exports = Autocomplete;
