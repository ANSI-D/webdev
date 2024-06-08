import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';

function Counter({ count, setCount }) {
  const [incrementButtonColor, setIncrementButtonColor] = useState('#007bff'); // Initial increment button color
  const [decrementButtonColor, setDecrementButtonColor] = useState('#007bff'); // Initial decrement button color

  const increment = () => {
    setCount(count + 1);
    setIncrementButtonColor('#a3be8c'); // Change to green when incremented
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
      setDecrementButtonColor('#bf616a'); // Change to red when decremented
    }
  };

  useEffect(() => {
    const incrementTimeout = setTimeout(() => {
      setIncrementButtonColor('#f0f0f0'); // Revert back to initial color after 300ms
    }, 300);

    return () => clearTimeout(incrementTimeout);
  }, [count, incrementButtonColor]); // Run effect when count or incrementButtonColor changes

  useEffect(() => {
    const decrementTimeout = setTimeout(() => {
      setDecrementButtonColor('#f0f0f0'); // Revert back to initial color after 300ms
    }, 300);

    return () => clearTimeout(decrementTimeout);
  }, [count, decrementButtonColor]); // Run effect when count or decrementButtonColor changes

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
