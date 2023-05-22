import React, { useState } from 'react';

const AsyncStateUpdate = () => {
  const [itemX, setItemX] = useState('initial X');
  const [itemY, setItemY] = useState('initial Y');
  const [itemZ, setItemZ] = useState('initial Z');

  // const mockAsyncStateUpdate = (apiData, delayMs) => {
  //   // Simulate an asynchronous API call with a delay
  //   setTimeout(() => {
  //     // Update state with the API data
  //     setItemX(apiData.x);
  //     setItemY(apiData.y);
  //     setItemZ(apiData.z);
  //   }, delayMs);
  // };
  // const asyncStateUpdateHandler = () => {
  //   mockAsyncStateUpdate(
  //     { x: 'Updated X ', y: 'Updated Y ', z: 'Updated Z ' },
  //     2000
  //   );
  // };

  const syncStateUpdateHandler = () => {
    setItemX('Updated X');
    setItemY('Updated Y');
    setItemZ('Updated Z');
  };

  console.count('render AsyncStateUpdate component');
  console.log('item X = ', itemX);
  console.log('item Y = ', itemY);
  console.log('item Z = ', itemZ);

  return (
    <div>
      <br />
      <p>Item X: {itemX}</p>
      <p>Item Y: {itemY}</p>
      <p>Item Z: {itemZ}</p>
      <button onClick={syncStateUpdateHandler}>UPDATE ASYNC STATE</button>
    </div>
  );
};

export default AsyncStateUpdate;
