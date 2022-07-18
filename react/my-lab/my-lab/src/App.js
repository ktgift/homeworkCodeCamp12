function App() {
  return (
    <div>
      <label forHtml="province">Province : </label>
        <select name="province" id="province">
          <option value="bangkok">bangkok</option>
          <option value="nakhonsawan">nakhonsawan</option>
        <option value="phichit">phichit</option>
      </select>

          <label forHtml="district">District : </label>
          <select name="district" id="district">
            <option value="bangna">เขตบางนา</option>
            <option value="bangrak">เขตบางรัก</option>
            <option value="banksue">เขตบางซื่อ</option>
          </select>   
    </div>
  );
}


export default App;

