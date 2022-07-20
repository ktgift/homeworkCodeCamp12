import { useState } from 'react'

function App() {
  const [showText, setShowText] = useState(true);

  return (
    <div style={{ margin: '30px' }}>
      <button onClick={() => {setShowText(!showText)}}>
      Click to hide text</button>
      {showText && <h1>Text</h1>}

    </div>

  )
}

export default App;