function App() {
  return (
    <select name='country' id='country' onClick={(event) => console.log(event.target.value)}>
      <option value={'thailand'}>Thailand</option>
      <option value={'england'}>England</option>
      <option value={'USA'}>USA</option>
      <option value={'cannada'}>Cannada</option>   
      <option value={'lao'}>Lao</option>   
    </select>
  );
}

export default App;
