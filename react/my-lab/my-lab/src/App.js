function App() {
  return (
    <>
      <div className="titleBar center">
          <button className="buttonStart">New Game</button>
      </div>
      <div className="flex-container">
        <div className="pink">
          <h2>PLAYER 1</h2>
          <p style={{ fontSize: '40px', marginTop: '25%' }}>0</p>
        </div>
        <div className="border">
          <div>
            <button className="roll">Roll</button>
            <button className="keep">Keep</button>
          </div>

          <div className="container">
            <div className="div border box">
              <p>1</p>
            </div>
          </div>
          <p style={{ marginTop: '45%' }}>Round Score : 0</p>
        </div>

        <div className="border">
          <h2>PLAYER 2</h2>
          <p style={{ fontSize: '40px', marginTop: '25%' }}>0</p>
        </div>
      </div>
      

    </>
  );
}


export default App;
