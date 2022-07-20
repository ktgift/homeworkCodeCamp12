import { useState } from 'react'

function App() {
  const [showText, setShowText] = useState(true);

  return (
    <div style={{ margin: '30px' }}>
      <button onClick={() => {setShowText(!showText)}}>
      {showText === true ? 'Hide' : 'Show'}</button>

      {showText && <h1>Text</h1>}
    </div>

  )
}

export default App;