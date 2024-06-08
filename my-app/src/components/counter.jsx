import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';

function Counter({ count, setCount }) {
  const [incrementButtonColor, setIncrementButtonColor] = useState('#007bff'); // Initial increment button color
  const [decrementButtonColor, setDecrementButtonColor] = useState('#007bff'); // Initial decrement button color

  const increment = () => {
    setCount(count + 1);
    setIncrementButtonColor('#a3be8c'); 
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
      setDecrementButtonColor('#bf616a'); 
    }
  };

  useEffect(() => {
    const incrementTimeout = setTimeout(() => {
      setIncrementButtonColor('#f0f0f0'); 
    }, 300);

    return () => clearTimeout(incrementTimeout);
  }, [count, incrementButtonColor]); 

  useEffect(() => {
    const decrementTimeout = setTimeout(() => {
      setDecrementButtonColor('#f0f0f0');
    }, 300);

    return () => clearTimeout(decrementTimeout);
  }, [count, decrementButtonColor]); 

  const counterStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  };

  return (
    <div style={counterStyle}>
      <h1>Counter: {count}</h1>
      <div>
        <Button
          variant="contained"
          style={{ backgroundColor: decrementButtonColor, margin: '10px', color: '#282a36' }}
          onClick={decrement}
        >
          -
        </Button>
        <Button
          variant="contained"
          style={{ backgroundColor: incrementButtonColor, margin: '10px', color: '#282a36' }}
          onClick={increment}
        >
          +
        </Button>

      </div>
    </div>
  );
}

export default Counter;
