import React, { useState } from 'react';

function HookCounter() {
  const [count, setCount] = useState(0);

  const setCountState = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <button onClick={setCountState}> Count {count}</button>
    </div>
  );
}

export default HookCounter;
