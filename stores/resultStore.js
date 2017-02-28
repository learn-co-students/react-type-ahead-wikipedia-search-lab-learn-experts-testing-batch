'use strict';

const Store = require('./Store');

class ResultStore extends Store{
  constructor(initialState = {results: [], updated: new Date(), query: ''}){
    super(initialState);
    this.state = initialState
  }
  isOutdated(updated){
    return this.getState().updated > updated;
  }
}

module.exports = new ResultStore();
