import { useState } from 'react'

function App() {
  const [hideBtn, setBtnHide] = useState('');

  return (
    <div style={{ margin: '30px' }}>
      <button onClick={(event) => {
        setBtnHide(event.target.hidden = true)
      }}>
      Click to hide me</button>
    </div>

  )
}

export default App;