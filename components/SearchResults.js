'use strict'

import React from 'react';

const SearchResults = ({ results }) => (
  <ul className="search-results">
    {results.map((result, index) =>
      <li>
        <a href={'#' + index}>
          {result.title}
        </a>
        <p>
          {result.description}
        </p>
      </li>
    )}
  </ul>
);

export default SearchResults;
