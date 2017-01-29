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
      query: '',
      results: resultStore.getState().results
    };
    this.handleChange = this.handleChange.bind(this)
  }

  componentDidMount(){
    this.removeListener = resultStore.addListener((state) => {
      this.setState({
        results: state.results
      })
    })
  }
  componentWillUnmount(){
    this.removeListener()
  }

  handleChange(e){
    this.setState({
      query: e.target.value
    }, () => {
      if(this.state.query.length > 2){
        actions.search(this.state.query)
      }
    })
  }
  render() {
    return (
      <div className="autocomplete">
        <h2>Autocomplete</h2>
        <SearchField value={this.state.query} onChange={this.handleChange} value={this.state.query}/>
        <SearchResults results={this.state.results} />
      </div>
    );
  }
}

module.exports = Autocomplete;
