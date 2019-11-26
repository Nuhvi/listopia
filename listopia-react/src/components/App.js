import React from 'react';
import Login from './Login';

const App = () => (
  <div
    style={{
      margin: 'auto',
      marginTop: '20px',
      maxWidth: '375px',
      height: '100%',
      maxHeight: '812px',
      borderRadius: '40px',
      overflow: 'hidden',
      border: '8px solid white',
      boxShadow: '0px 0px 12px 5px rgba(0,0,0,0.2)',
    }}
  >
    <Login />
  </div>
);

export default App;
