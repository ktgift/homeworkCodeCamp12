import { useState } from 'react'

function App() {
  const [number, setNumber] = useState('');
  const [showError, setShowError] = useState('');

  const handleNumberChange = event => {
    setNumber(event.target.value);
  }

  const handleClickCheck = () => {
    if (number === '') {
      setShowError('Phone Number is required')
    } else if (number.length !== 10) {
      setShowError('Invalid length')
    } else if (number.match("^[0-9]*$")) {
      setShowError('')
      alert('Your number is valid')
    } else {
      setShowError('Phone Number is invalid')
    }
  }

  return (
    <div style={{ margin: '30px' }}>
      <input 
        id="inputNumber" 
        placeholder="Phone Number"
        className={showError === '' ? '' : 'error'}
        value={number}
        onChange={handleNumberChange} />
      
      <button onClick={handleClickCheck}>Check</button>

      {showError === '' ? null : <p className='error'>{showError}</p>}
    </div>

  )
}

export default App;