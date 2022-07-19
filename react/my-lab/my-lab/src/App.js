function App() {
  const handleClick = (event) => {
    event.preventDefault();
    const response = window.confirm('Leave for Google ?');
    if(response) {
      window.location.assign('https://google.com')
    }
  }

  return (
    <div style={{ margit: '30px', fontSize: 40 }}>
      <a href="https://google.com" onClick={handleClick}>
        Google
      </a>
    </div>

  )
}

export default App;