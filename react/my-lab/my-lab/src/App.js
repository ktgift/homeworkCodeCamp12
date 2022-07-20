import { useState } from 'react'

function App() {
  const [state, setState] = useState(0);

  return (
    <div style={{ margin: '30px' }}>
      <label htmlFor='inputNumber'>Enter Dollar: </label>
      <input id="inputNumber" onChange={(event) => setState(event.target.value * 30)} />

      <p>Convert to Bath: {state}</p>
    </div>

  )
}

export default App;