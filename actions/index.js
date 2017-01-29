'use strict';

const jsonp = require('jsonp');
const resultStore = require('../stores/resultStore');
const wikipedia = require('../utils/wikipedia');

const search = (query) => {
  const requested = new Date();

  return wikipedia.search(query).then((data) => {
    const results = []
    if (!resultStore.isOutdated(requested)){
      for(let i = 0; i < data[1].length; i++){
        results.push({title: data[1][i], description: data[2][i], link: data[3][i]})
      }
      resultStore.setState({
        results: results,
        updated: requested
      })
    }
  });
};

module.exports = { search };
