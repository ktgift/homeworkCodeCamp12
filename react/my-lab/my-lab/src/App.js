function App() {
  const handleSelectPhoneBand = (event) => {
    console.log('name: ' + event.target.name);
    console.log('value: ' + event.target.value);
    if(event.target.checked === true) {
      console.log('checkbox: tick')
    } else {
      console.log('checkbox: untick')
    }
  }
  return (
    <div style={{ marginTop: '20px', marginLeft: '20px', fontSize: '20px'}}>
        <input 
          type="checkbox" 
          id="apple" 
          name="apple" 
          value="apple" 
          onClick={handleSelectPhoneBand}
        />
        <label htmlFor="apple">Apple</label><br/>

        <input 
          type="checkbox" 
          id="samsung" 
          name="samsung" 
          value="samsung"
          onClick={handleSelectPhoneBand}
        />
        <label htmlFor="samsung">Samsung</label><br/>

        <input 
          type="checkbox" 
          id="oppo"  
          name="oppo" 
          value="oppo" 
          onClick={handleSelectPhoneBand}
        />
        <label htmlFor="oppo">Oppo</label><br/>
    </div>
  )
}

export default App;