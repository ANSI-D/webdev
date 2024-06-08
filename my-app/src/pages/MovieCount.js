import React, { useState } from 'react';
import Counter from '../components/counter.jsx';

function App() {
  const [count, setCount] = useState(0);

  const appStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    textAlign: 'center',
  };

  return (
    <div style={appStyle}>
      <h1>How many of his movies have you seen?</h1>
      <Counter count={count} setCount={setCount} />
      <p>You have seen {count} {count === 1 ? 'Ryan Gosling movie' : 'Ryan Gosling movies'}.</p>
    </div>
  );
}

export default App;
