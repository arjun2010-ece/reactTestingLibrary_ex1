import React, { useState } from 'react';

const MessageComponent = () => {
  const [count, updateCount] = useState(1)

  return (
    <div>
      <p data-testid='countMessage'>{`The count is ${count}`}</p>
      <button onClick={() => updateCount(count + 1)}>Add 1 to Count</button>
    </div>
  )
}

export default MessageComponent;