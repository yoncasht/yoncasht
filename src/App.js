import React, { useState } from 'react';

function App() {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(true);
  };

  return (
    <div>
      <button onClick={handleClick}>Butona Tıkla</button>
      {clicked && <p>Butona tıklandı</p>}
    </div>
  );
}

export default App;
