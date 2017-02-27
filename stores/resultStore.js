'use strict';

const Store = require('./Store');

class ResultStore extends Store {
  constructor(props) {
    super();
    this.state = {
      results: [],
      updated: new Date()
    };
  }

  isOutdated(updated) {
    return this.getState().updated > updated;
  }
}


module.exports = new ResultStore();
