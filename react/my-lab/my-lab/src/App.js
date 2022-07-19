function App() {
  return (
   <input 
    className="position"
    placeholder="Enter your message"  
    onChange={(event) => console.log(event.target.value)} 
  />
  );
}

export default App;
