import React from 'react'
import { useState } from 'react';

import { generateItems } from './helpers/generateItems';
import Items from './components/Items';

const dummyItemList = generateItems();

function filterItems(filterState) {
  if (!filterState) {
    return dummyItemList;
  }
  return dummyItemList.filter((item) => item.includes(filterState));
}

const Layout = () => {
  const [filterState, setFilterState] = useState('');
  const [displayState, setDisplayState] = useState('');

  const filteredItems = filterItems(filterState);

  function updateFilterHandler(event) {
  setFilterState(event.target.value);
  setDisplayState(event.target.value)
  }

  return (
    <div id="app">
      <input type="text" onBlur={updateFilterHandler} />
      <p>Filter value: {displayState || '"none"'}</p>
      <Items items={filteredItems} />
    </div>
  );
}

export default Layout