'use strict';

import Store from './Store';

class ResultStore extends Store{
  constructor(initialState = {results: [], updated: new Date(), query: ''}){
    super(initialState);
    this.state = initialState
  }
  isOutdated(updated){
    return this.getState().updated > updated;
  }
}

const resultStore = new ResultStore();

export default resultStore;
