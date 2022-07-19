
function App() {
  return (
    // inline 
    // <div style={{ textAlign: 'center', marginTop: '30rem' }}>
    //   <button>+</button>
    //   <span style={{ marginLeft: 10, marginRight: 10 }}>0</span>
    //   <button style={{ marginRight: 10 }}>-</button>
    //   <button>Reset</button>
    // </div>

    // external
    <div className="div">
      <button className="buttoms">+</button>
      <span className="buttoms">0</span>
      <button className="buttoms">-</button>
      <button>Reset</button>
    </div>
  );
}


export default App;
