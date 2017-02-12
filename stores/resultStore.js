'use strict';

const Store = require('./Store');
const options = {
  results: [],
  updated: new Date(),
  query: ''
}
class ResultStore extends Store{
  constructor(initialState = options){
    super(initialState);
    this.state = initialState
  }
  isOutdated(updated){
    return this.getState().updated > updated;
  }
}

module.exports = new ResultStore();
