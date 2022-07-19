function App() {
  return (
    <>
    {/* inline  */}
    <div>
        <button style={{ display: "block" }}>Add</button>
        <div style={{ display: "block" }}>
          <del style={{ marginTop: '10px', marginRight: '10px', color: 'green' }}>Task 1</del>
          <button style={{ marginTop: '10px', marginRight: '10px' }}>Edit</button>
          <button>Del</button>
        </div>
        <div style={{ display: "block" }}>
          <span style={{ marginTop: '10px', marginRight: '10px' }}>Task 2</span>
          <button style={{ marginTop: '10px', marginRight: '10px' }}>Edit</button>
          <button>Del</button>
        </div>
    </div>

    {/* external */}
    <div>
        <button>Add</button>
        <div classNamr="div">
          <span className="buttoms text">Task 1</span>
          <button className="buttoms">Edit</button>
          <button>Del</button>
        </div>
        <div classNamr="div">
          <span className="buttoms">Task 2</span>
          <button className="buttoms">Edit</button>
          <button>Del</button>
        </div>
    </div>
  </>
  );
}


export default App;
