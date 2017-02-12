'use strict';

const jsonp = require('jsonp');
const resultStore = require('../stores/resultStore');
const wikipedia = require('../utils/wikipedia');
// const data = [
//   'query',
//   ['title 1', 'title 2'],
//   ['description 1', 'description 2'],
//   ['link 1', 'link 2']
// ];
const search = (query) => {
  const requested = new Date();

  return wikipedia.search(query).then((data) => {
      //const newData = data.slice(1, data.length)
      if (resultStore.isOutdated(requested)){
        return;
      }
      const [query, titles, descriptions, links] = data

      const results = titles.map((title, i)=>({
        title,
        description: descriptions[i],
        link: links[i]
      }))
      // const formattedData = [];
      //   for(i=0; i<newData[0].length;i++){
      //     formattedData.push({
      //       title: newData[0][i],
      //       description: newData[1][i],
      //       link: newData[2][i]
      //     })
      //   }
        resultStore.setState({
          results,
          updated: requested
        })
  });
};

module.exports = { search };
