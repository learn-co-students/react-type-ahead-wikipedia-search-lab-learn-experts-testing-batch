'use strict';

const jsonp = require('jsonp');
const resultStore = require('../stores/resultStore');
const wikipedia = require('../utils/wikipedia');

const search = (query) => {
  const requested = new Date();

  return wikipedia.search(query).then((data) => {
    var newData = [];
    if(data){
      for (var i = 0; i < data.length - 2; i++) {
        newData.push({
          description: data[2][i],
          link: data[3][i],
          title: data[1][i]
        });
      }
    }
    if(!resultStore.isOutdated(requested)){
      resultStore.setState({results: newData, updated: requested});
    }
  });
};

module.exports = { search };
