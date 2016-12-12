'use strict';

const Store = require('./Store');

class ResultStore extends Store {
  isOutdated(query){
    if(this.state.updated - query > 0){
      return true;
    } else {
      return false;
    }
  }
}

module.exports = new ResultStore({results: []});
