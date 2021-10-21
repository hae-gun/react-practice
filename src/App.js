import React from 'react'
import MyComponent from './MyComponent.js'

function App() {
  const name = '리액트';
  return (
    <>
      <MyComponent name="a" children="child1" favoriteNumber={10} />
    </>
  );
}


export default App;
