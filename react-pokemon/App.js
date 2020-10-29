import React from 'react';
import Flexbox from 'flexbox-react';
import ListView from './components/ListView';

function App() {
  return (
    <Flexbox flexDirection='column' width='100vw'>
      <Flexbox>
        <ListView />
      </Flexbox>
    </Flexbox>
  )
}

export default App
